import { Types } from '../constants/codepanel-types';

export const codepanelSetCheckpoints = checkpoints => ({
  type: Types.LESSON_SET_CHECKPOINTS,
  payload: checkpoints
});

export const codepanelSetCheckpointsCount = count => ({
  type: Types.LESSON_SET_CHECKPOINTS_COUNT,
  payload: count
});

export const codepanelSetProgress = progress => ({
  type: Types.LESSON_SET_PROGRESS,
  payload: progress
});

export const codepanelSetFontsize = fontSize => ({
  type: Types.LESSON_SET_FONTSIZE,
  payload: fontSize
});

export const codepanelIncFontsize = () => ({
  type: Types.LESSON_INC_FONTSIZE,
});

export const codepanelDecFontsize = () => ({
  type: Types.LESSON_DEC_FONTSIZE,
});

export const codepanelSetCode = code => ({
  type: Types.LESSON_SET_CODE,
  payload: code
});

export const codepanelSetEditor = editor => ({
  type: Types.LESSON_SET_EDITOR,
  payload: editor
});

export const codepanelSetTab = tab => ({
  type: Types.LESSON_SET_TAB,
  payload: tab
});

export const codepanelSetIsValid = isValid => ({
  type: Types.LESSON_SET_VALID,
  payload: isValid
});

export const codepanelSetMonaco = monaco => ({
  type: Types.LESSON_SET_MONACO,
  payload: monaco
});

export const codepanelSetSlides = slides => ({
  type: Types.LESSON_SET_SLIDES,
  payload: slides
});

export const codepanelSetPreview = preview => ({
  type: Types.LESSON_SET_PREVIEW,
  payload: preview
});

export const codepanelSetSlideNumber = n => ({
  type: Types.LESSON_SET_SLIDE_NUMBER,
  payload: n
});

export const codepanelSetSlidesLoader = () => ({
  type: Types.LESSON_SET_SLIDES_LOADER
});

export const codepanelIncSlideNumber = () => ({
  type: Types.LESSON_INC_SLIDE_NUMBER
});

export const codepanelDecSlideNumber = () => ({
  type: Types.LESSON_DEC_SLIDE_NUMBER
});

export const codepanelUnsetSlidesLoader = () => ({
  type: Types.LESSON_UNSET_SLIDES_LOADER
});

export const codepanelSetPreviewVisible = isVisible => ({
  type: Types.LESSON_SET_PREVIEW_VISIBLE,
  payload: isVisible
});
