
exports.__esModule = true;

let _extends =
  Object.assign ||
  function (target) {
    for (let i = 1; i < arguments.length; i++) {
      let source = arguments[i];
      for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

let _react = require("react");

let _react2 = _interopRequireDefault(_react);

let _propTypes = require("prop-types");

let _propTypes2 = _interopRequireDefault(_propTypes);

let _lodash = require("lodash");

let _Events = require("./Events");

let Events = _interopRequireWildcard(_Events);

let _usePrevValue = require("./usePrevValue");

let _usePrevValue2 = _interopRequireDefault(_usePrevValue);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
    let newObj = {};
    if (obj != null) {
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {newObj[key] = obj[key];}
      }
    }
    newObj.default = obj;
    return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

if (!global._babelPolyfill) {
  require("babel-polyfill");
}

let DEFAULT_ANIMATION_TIMER = 1000;
let DEFAULT_ANIMATION = "ease-in-out";
let DEFAULT_CONTAINER_HEIGHT = "100vh";
let DEFAULT_CONTAINER_WIDTH = "100vw";
let DEFAULT_COMPONENT_INDEX = 0;
let DEFAULT_COMPONENTS_TO_RENDER_LENGTH = 0;

let DEFAULT_ANIMATION_TIMER_BUFFER = 300;
let KEY_UP = 38;
let KEY_DOWN = 40;
let DISABLED_CLASS_NAME = "rps-scroll--disabled";

let previousTouchMove = null;
let touchStartX = 0;
let touchStartY = 0;
let isScrolling = false;
let isMounted = false;
let isBodyScrollEnabled = true;
let isTransitionAfterComponentsToRenderChanged = false;
let containers = [];

let ReactPageScroller = function ReactPageScroller(_ref) {
  let animationTimer = _ref.animationTimer;
    let animationTimerBuffer = _ref.animationTimerBuffer;
    let blockScrollDown = _ref.blockScrollDown;
    let blockScrollUp = _ref.blockScrollUp;
    let children = _ref.children;
    let containerHeight = _ref.containerHeight;
    let containerWidth = _ref.containerWidth;
    let customPageNumber = _ref.customPageNumber;
    let handleScrollUnavailable = _ref.handleScrollUnavailable;
    let pageOnChange = _ref.pageOnChange;
    let renderAllPagesOnFirstRender = _ref.renderAllPagesOnFirstRender;
    let transitionTimingFunction = _ref.transitionTimingFunction;

  let _useState = (0, _react.useState)(DEFAULT_COMPONENT_INDEX);
    let componentIndex = _useState[0];
    let setComponentIndex = _useState[1];

  let _useState2 = (0, _react.useState)(DEFAULT_COMPONENTS_TO_RENDER_LENGTH);
    let componentsToRenderLength = _useState2[0];
    let setComponentsToRenderLength = _useState2[1];

  let prevComponentIndex = (0, _usePrevValue2.default)(componentIndex);
  let pageContainer = (0, _react.useRef)(null);

  let addNextComponent = (0, _react.useCallback)(
    function (componentsToRenderOnMountLength) {
      let tempComponentsToRenderLength = 0;

      if (!(0, _lodash.isNil)(componentsToRenderOnMountLength)) {
        tempComponentsToRenderLength = componentsToRenderOnMountLength;
      }

      tempComponentsToRenderLength = Math.max(
        tempComponentsToRenderLength,
        componentsToRenderLength
      );

      if (tempComponentsToRenderLength <= componentIndex + 1) {
        if (!(0, _lodash.isNil)(children[componentIndex + 1])) {
          tempComponentsToRenderLength++;
        }
      }

      setComponentsToRenderLength(tempComponentsToRenderLength);
    },
    [children, componentIndex, componentsToRenderLength]
  );

  let checkRenderOnMount = (0, _react.useCallback)(
    function () {
      if (renderAllPagesOnFirstRender) {
        setComponentsToRenderLength(_react2.default.Children.count(children));
      } else if (!(0, _lodash.isNil)(children[DEFAULT_COMPONENT_INDEX + 1])) {
        addNextComponent(DEFAULT_COMPONENTS_TO_RENDER_LENGTH + 1);
      }
    },
    [addNextComponent, children, renderAllPagesOnFirstRender]
  );

  let disableScroll = (0, _react.useCallback)(function () {
    if (isBodyScrollEnabled) {
      isBodyScrollEnabled = false;
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
      });
      document.body.classList.add(DISABLED_CLASS_NAME);
      document.documentElement.classList.add(DISABLED_CLASS_NAME);
    }
  }, []);

  let enableDocumentScroll = (0, _react.useCallback)(function () {
    if (!isBodyScrollEnabled) {
      isBodyScrollEnabled = true;
      document.body.classList.remove(DISABLED_CLASS_NAME);
      document.documentElement.classList.remove(DISABLED_CLASS_NAME);
    }
  }, []);

  let setRenderComponents = (0, _react.useCallback)(
    function () {
      let newComponentsToRender = [];

      let i = 0;

      while (i < componentsToRenderLength && !(0, _lodash.isNil)(children[i])) {
        containers[i] = true;
        newComponentsToRender.push(
          _react2.default.createElement(
            "div",
            { key: i, style: { height: "100%", width: "100%" } },
            _react2.default.cloneElement(
              children[i],
              _extends({}, children[i].props)
            )
          )
        );
        i++;
      }

      return newComponentsToRender;
    },
    [children, componentsToRenderLength]
  );

  let scrollWindowDown = (0, _react.useCallback)(
    function () {
      if (!isScrolling && !blockScrollDown) {
        if (!(0, _lodash.isNil)(containers[componentIndex + 1])) {
          disableScroll();
          isScrolling = true;
          pageContainer.current.style.transform =
            "translate3d(0, " + (componentIndex + 1) * -100 + "%, 0)";

          setTimeout(function () {
            if (isMounted) {
              setComponentIndex(function (prevState) {
                return prevState + 1;
              });
            }
          }, animationTimer + animationTimerBuffer);
        } else {
          enableDocumentScroll();
          if (handleScrollUnavailable) {
            handleScrollUnavailable();
          }
        }
      }
    },
    [
      animationTimer,
      animationTimerBuffer,
      blockScrollDown,
      componentIndex,
      disableScroll,
      enableDocumentScroll,
      handleScrollUnavailable
    ]
  );

  let scrollWindowUp = (0, _react.useCallback)(
    function () {
      if (!isScrolling && !blockScrollUp) {
        if (!(0, _lodash.isNil)(containers[componentIndex - 1])) {
          disableScroll();
          isScrolling = true;
          pageContainer.current.style.transform =
            "translate3d(0, " + (componentIndex - 1) * -100 + "%, 0)";

          setTimeout(function () {
            if (isMounted) {
              setComponentIndex(function (prevState) {
                return prevState - 1;
              });
            }
          }, animationTimer + animationTimerBuffer);
        } else {
          enableDocumentScroll();
          if (handleScrollUnavailable) {
            handleScrollUnavailable();
          }
        }
      }
    },
    [
      animationTimer,
      animationTimerBuffer,
      blockScrollUp,
      componentIndex,
      disableScroll,
      enableDocumentScroll,
      handleScrollUnavailable
    ]
  );

  let touchMove = (0, _react.useCallback)(
    function (event) {
      // if (!(0, _lodash.isNull)(previousTouchMove)) {
      //   if (event.touches[0].clientY > previousTouchMove) {
      //     scrollWindowUp();
      //   } else {
      //     scrollWindowDown();
      //   }
      // } else {
      //   previousTouchMove = event.touches[0].clientY;
      // }
    },
    [scrollWindowDown, scrollWindowUp]
  );

  let touchStart = (0, _react.useCallback)(
    function (event) {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    },
    [scrollWindowDown, scrollWindowUp]
  );

  let touchEnd = (0, _react.useCallback)(
    function (event) {
      const absDeltaX = Math.abs(touchStartX - event.changedTouches[0].clientX);
      const deltaY = touchStartY - event.changedTouches[0].clientY;
      const absDeltaY = Math.abs(deltaY);

      if (absDeltaY < absDeltaX || absDeltaY < 100) {
        return;
      }

      if (deltaY > 0) {
        scrollWindowDown();
      } else {
        scrollWindowUp();
      }
    },
    [scrollWindowDown, scrollWindowUp]
  );

  let wheelScroll = (0, _react.useCallback)(
    function (event) {
      if (event.deltaY < 0) {
        scrollWindowUp();
      } else {
        scrollWindowDown();
      }
    },
    [scrollWindowDown, scrollWindowUp]
  );

  let keyPress = (0, _react.useCallback)(
    function (event) {
      if ((0, _lodash.isEqual)(event.keyCode, KEY_UP)) {
        scrollWindowUp();
      }
      if ((0, _lodash.isEqual)(event.keyCode, KEY_DOWN)) {
        scrollWindowDown();
      }
    },
    [scrollWindowDown, scrollWindowUp]
  );

  (0, _react.useEffect)(
    function () {
      pageContainer.current.addEventListener(Events.TOUCHMOVE, touchMove);
      pageContainer.current.addEventListener(Events.TOUCHSTART, touchStart);
      pageContainer.current.addEventListener(Events.TOUCHEND, touchEnd);
      pageContainer.current.addEventListener(Events.KEYDOWN, keyPress);
      return function () {
        pageContainer.current.removeEventListener(Events.TOUCHMOVE, touchMove);
        pageContainer.current.removeEventListener(
          Events.TOUCHSTART,
          touchStart
        );
        pageContainer.current.removeEventListener(Events.TOUCHEND, touchEnd);
        pageContainer.current.removeEventListener(Events.KEYDOWN, keyPress);
      };
    },
    [touchMove, keyPress]
  );

  (0, _react.useEffect)(function () {
    isMounted = true;

    checkRenderOnMount();
    return function () {
      isMounted = false;
    };
  }, []);

  (0, _react.useEffect)(
    function () {
      isScrolling = false;
      previousTouchMove = null;
      if (componentIndex > prevComponentIndex) {
        addNextComponent();
      }
    },
    [addNextComponent, componentIndex, prevComponentIndex]
  );

  (0, _react.useEffect)(
    function () {
      if (pageOnChange) {
        pageOnChange(componentIndex);
      }
    },
    [pageOnChange, componentIndex]
  );

  (0, _react.useEffect)(
    function () {
      if (
        !(0, _lodash.isNil)(customPageNumber) &&
        !(0, _lodash.isEqual)(customPageNumber, componentIndex)
      ) {
        let newComponentsToRenderLength = componentsToRenderLength;

        if (!(0, _lodash.isEqual)(componentIndex, customPageNumber)) {
          if (
            !(0, _lodash.isNil)(containers[customPageNumber]) &&
            !isScrolling
          ) {
            isScrolling = true;
            // eslint-disable-next-line max-len
            pageContainer.current.style.transform =
              "translate3d(0, " + customPageNumber * -100 + "%, 0)";

            if (
              (0, _lodash.isNil)(containers[customPageNumber]) &&
              !(0, _lodash.isNil)(children[customPageNumber])
            ) {
              newComponentsToRenderLength++;
            }

            setTimeout(function () {
              setComponentIndex(customPageNumber);
              setComponentsToRenderLength(newComponentsToRenderLength);
            }, animationTimer + animationTimerBuffer);
          } else if (
            !isScrolling &&
            !(0, _lodash.isNil)(children[customPageNumber])
          ) {
            for (let i = componentsToRenderLength; i <= customPageNumber; i++) {
              newComponentsToRenderLength++;
            }

            if (!(0, _lodash.isNil)(children[customPageNumber])) {
              newComponentsToRenderLength++;
            }

            isScrolling = true;
            isTransitionAfterComponentsToRenderChanged = true;
            setComponentsToRenderLength(newComponentsToRenderLength);
          }
        }
      }
    },
    [customPageNumber]
  );

  (0, _react.useEffect)(
    function () {
      if (isTransitionAfterComponentsToRenderChanged) {
        isTransitionAfterComponentsToRenderChanged = false;

        pageContainer.current.style.transform =
          "translate3d(0, " + customPageNumber * -100 + "%, 0)";

        setTimeout(function () {
          setComponentIndex(customPageNumber);
        }, animationTimer + animationTimerBuffer);
      }
    },
    [
      animationTimer,
      animationTimerBuffer,
      componentsToRenderLength,
      customPageNumber
    ]
  );

  return _react2.default.createElement(
    "div",
    {
      style: {
        height: containerHeight,
        width: containerWidth,
        overflow: "hidden"
      }
    },
    _react2.default.createElement(
      "div",
      {
        ref: pageContainer,
        onWheel: wheelScroll,
        style: {
          height: "100%",
          width: "100%",
          transition:
            "transform " + animationTimer + "ms " + transitionTimingFunction,
          outline: "none"
        },
        tabIndex: 0
      },
      setRenderComponents()
    )
  );
};

ReactPageScroller.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        animationTimer: _propTypes2.default.number,
        animationTimerBuffer: _propTypes2.default.number,
        blockScrollDown: _propTypes2.default.bool,
        blockScrollUp: _propTypes2.default.bool,
        children: _propTypes2.default.any,
        containerHeight: _propTypes2.default.oneOfType([
          _propTypes2.default.number,
          _propTypes2.default.string
        ]),
        containerWidth: _propTypes2.default.oneOfType([
          _propTypes2.default.number,
          _propTypes2.default.string
        ]),
        customPageNumber: _propTypes2.default.number,
        handleScrollUnavailable: _propTypes2.default.func,
        pageOnChange: _propTypes2.default.func,
        renderAllPagesOnFirstRender: _propTypes2.default.bool,
        transitionTimingFunction: _propTypes2.default.string
      }
    : {};

ReactPageScroller.defaultProps = {
  animationTimer: DEFAULT_ANIMATION_TIMER,
  animationTimerBuffer: DEFAULT_ANIMATION_TIMER_BUFFER,
  transitionTimingFunction: DEFAULT_ANIMATION,
  containerHeight: DEFAULT_CONTAINER_HEIGHT,
  containerWidth: DEFAULT_CONTAINER_WIDTH,
  blockScrollUp: false,
  blockScrollDown: false
};

exports.default = ReactPageScroller;
module.exports = exports.default;
