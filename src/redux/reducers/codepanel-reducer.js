import { Types } from '../constants/codepanel-types'

const initialState = {
  currentLesson: null,
  slides: null,
  currentSlide: 0,
  preview: null,
  code: "",
  slidesLoader: false,
  editor: null,
  monaco: null,
  tab: 0,
  isValid: false,
  challenges: null,
  progress: 0,
  challengesCount: 0,
  fontSize: 14,
  isPreviewVisible: true,
  textareaRef: null,
  isCheckerOpen: false,
  isCheckerActive: true,
  isProjectsActive: false,
  isLeaveActive: false,
  leaveNext: null,
  isTourActive: false,
  isResetActive: false,
  isBlocked: true,
};

const codepanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LESSON_SET_CODE: {
      return { ...state, code: action.payload };
    }
    case Types.LESSON_SET_SLIDE_NUMBER: {
      let currentSlide = action.payload;
      if (currentSlide < 0) {
        currentSlide = 0;
      } else if (currentSlide > state.slides.slides.length) {
        currentSlide = state.slides.slides.length;
      }
      return { ...state, currentSlide };
    }
    case Types.LESSON_INC_SLIDE_NUMBER: {
      return {
        ...state,
        currentSlide:
          state.currentSlide < state.slides.slides.length
            ? state.currentSlide + 1
            : state.slides.slides.length
      };
    }
    case Types.LESSON_DEC_SLIDE_NUMBER: {
      return {
        ...state,
        currentSlide: state.currentSlide > 0 ? state.currentSlide - 1 : 0
      };
    }
    case Types.LESSON_SET_SLIDES: {
      return { ...state, slides: action.payload };
    }
    case Types.LESSON_SET_FONTSIZE: {
      return { ...state, fontSize: action.payload };
    }
    case Types.LESSON_INC_FONTSIZE: {
      return { ...state, fontSize: state.fontSize + 1};
    }
    case Types.LESSON_DEC_FONTSIZE: {
      return { ...state, fontSize: state.fontSize - 1};
    }
    case Types.LESSON_SET_PREVIEW: {
      return { ...state, preview: action.payload };
    }
    case Types.LESSON_SET_SLIDES_LOADER: {
      return { ...state, slidesLoader: true };
    }
    case Types.LESSON_SET_VALID: {
      return { ...state, isValid: action.payload };
    }
    case Types.LESSON_UNSET_SLIDES_LOADER: {
      return { ...state, slidesLoader: false };
    }
    case Types.LESSON_SET_TAB: {
      return { ...state, tab: action.payload };
    }
    case Types.LESSON_SET_CHALLENGES: {
      return { ...state, challenges: action.payload };
    }
    case Types.LESSON_SET_CHALLENGES_COUNT: {
      return { ...state, challengesCount: action.payload };
    }
    case Types.LESSON_SET_PROGRESS: {
      return { ...state, progress: action.payload };
    }
    case Types.LESSON_SET_EDITOR: {
      return { ...state, editor: action.payload };
    }
    case Types.LESSON_SET_MONACO: {
      return { ...state, monaco: action.payload };
    }
    case Types.LESSON_SET_PREVIEW_VISIBLE: {
      return { ...state, isPreviewVisible: action.payload };
    }
    case Types.LESSON_SET_TEXTAREA_REF: {
      return { ...state, textareaRef: action.payload };
    }
    case Types.LESSON_SET_CHECKER_OPEN: {
      return { ...state, isCheckerOpen: action.payload };
    }
    case Types.LESSON_SET_CHECKER_ACTIVE: {
      return { ...state, isCheckerActive: action.payload };
    }
    case Types.LESSON_SET_PROJECTS_ACTIVE: {
      return { ...state, isProjectsActive: action.payload };
    }
    case Types.LESSON_SET_LEAVE_MODAL_ACTIVE: {
      return { ...state, isLeaveActive: action.payload };
    }
    case Types.LESSON_SET_LEAVE_MODAL_NEXT: {
      return { ...state, leaveNext: action.payload };
    }
    case Types.LESSON_SET_TOUR_MODAL_ACTIVE: {
      return { ...state, isTourActive: action.payload };
    }
    case Types.LESSON_SET_RESET_MODAL_ACTIVE: {
      return { ...state, isResetActive: action.payload };
    }
    case Types.LESSON_SET_BLOCK_UPDATE: {
      return { ...state, isBlocked: action.payload };
    }
    case Types.LESSON_SET_CURRENT_LESSON: {
      return { ...state, currentLesson: action.payload };
    }
    default:
      return state;
  }
};

export default codepanelReducer
