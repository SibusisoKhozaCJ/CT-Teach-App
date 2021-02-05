import { takeLatest } from "redux-saga/effects";

import { Types } from "../constants/codepanel-types"

import {
  codepanelCodeWorker,
  codepanelSlideNumberWorker
} from "./codepanel-saga"

export default function * sagaWatcher() {
  yield takeLatest(Types.LESSON_SET_CODE, codepanelCodeWorker);
  yield takeLatest(Types.LESSON_SET_SLIDE_NUMBER, codepanelSlideNumberWorker);
  yield takeLatest(Types.LESSON_INC_SLIDE_NUMBER, codepanelSlideNumberWorker);
  yield takeLatest(Types.LESSON_DEC_SLIDE_NUMBER, codepanelSlideNumberWorker);
}
