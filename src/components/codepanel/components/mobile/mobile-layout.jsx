import React, { useRef, useEffect, useState} from "react";
import SwipeableViews from "react-swipeable-views";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Topbar from "./topbar";
import Bottombar from "./bottombar";
import { codepanelSetTab } from "../../../../redux/actions/codepanel-actions";
import Tutorial from "./tutorial";

const useStyles = makeStyles((theme) => ({
  swipeableContainer: {
    height: "100%"
  }
}));

const MobileLayout = ({ editor, slider, preview }) => {
  const dispatch = useDispatch();
  const index = useSelector(state => state.codepanel.tab);
  const slidesRef = useRef(null);
  const editorRef = useRef(null);
  const previewRef = useRef(null);
  const classes = useStyles();
  const [vh, setVh] = useState(null);

  const resizeListener = () => {
    setVh(window.innerHeight * 0.001);
  }

  const switchTab = (i) => {
    switch (i) {
      case 1: {
        editorRef.current.focus();
        break;
      }
      case 2: {
        previewRef.current.focus();
        break;
      }
      default: {
        slidesRef.current.focus();
      }
    }
    dispatch(codepanelSetTab(i));
  }

  useEffect(() => {
    // document.documentElement.style.setProperty("--vh", `${vh}px`);
    if (typeof window !== "undefined") {
      // let newVh = window.innerHeight * 0.01;
      window.addEventListener("resize", resizeListener);
      return () => {
        window.removeEventListener("resize", resizeListener);
      }
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: vh ? `calc(100px * ${vh})` : "100vh",
        width: "100vw",
        margin: 0,
        padding: 0
      }}
    >
      <Topbar />
      <div style={{ width: "100%", height: 50 }} />
      <SwipeableViews
        index={index}
        className={classes.swipeableContainer}
        style={{ flexGrow: 1, width: "100%", height: 'calc(100% - 100px)', position: "fixed", top: 50}}
        onChangeIndex={switchTab}
      >
        <div ref={slidesRef} style={{ height: "100%", width: "100%" }} tabIndex="0">
          {slider}
        </div>
        <div
          ref={editorRef}
          style={{ height: "100%", width: "100%", backgroundColor: "#1E1E1E" }}
          tabIndex="1"
        >
          {editor}
        </div>
        <div ref={previewRef} style={{ height: "100%", width: "100%" }} tabIndex="2">
          {preview}
        </div>
      </SwipeableViews>
      {index === 1 && <Tutorial />}
      <div />
      <Bottombar />
    </div>
  );
};

export default MobileLayout;
