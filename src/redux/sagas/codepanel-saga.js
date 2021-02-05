import { call, put, select } from "redux-saga/effects";

import {
    codepanelSetIsValid,
    codepanelSetProgress,
    codepanelSetCheckpoints
} from "../actions/codepanel-actions"

export function * codepanelCodeWorker({ payload }) {
  // yield put(lessonSetIsValid(false));
  const isValid = yield select(state => state.codepanel.isValid);
  const currentSlide = yield select(state => state.codepanel.currentSlide);
  const lesson = yield select(state => state.codepanel.slides);
  // const authId = yield select(state => state.app.authId);
  const reg = lesson.slides[currentSlide]
    ? lesson.slides[currentSlide].reg
    : false;
  const newIsValid = yield call(validate, payload, reg);

  if (isValid !== newIsValid) {
    yield put(codepanelSetIsValid(newIsValid));
  }
  yield call(saveCode, payload);

  if (newIsValid) {
    const checkpoints = yield select(state => state.codepanel.checkpoints);
    const count = yield select(state => state.codepanel.checkpointsCount);
    let checkpointIndex = -1;
    for (let i = 0; i < count; i++) {
      if (checkpoints[i].slide === currentSlide) {
        checkpointIndex = i;
      }
    }
    if (checkpointIndex !== -1) {
      checkpoints[checkpointIndex].status = 1;
      yield put(codepanelSetCheckpoints(checkpoints));
      let validCount = 0;
      for (let i = 0; i < count; i++) {
        if (checkpoints[i].status) {
          validCount++;
        }
      }
      const progress = (validCount / count) * 100;
      yield put(codepanelSetProgress(progress));
      // console.log("before save");
      // yield call(saveCheckPointsAndProgress, {
      //   authId,
      //   checkpoints,
      //   count,
      //   progress,
      //   lastCheckpoint: checkpointIndex + 1
      // });
    }
  }
}

export function * codepanelSlideNumberWorker({ payload }) {
  const isValid = yield select(state => state.codepanel.isValid);
  const code = yield select(state => state.codepanel.code);
  const lesson = yield select(state => state.codepanel.slides);
  const reg = lesson.slides[payload] ? lesson.slides[payload].reg : false;
  const newIsValid = yield call(validate, code, reg);
  if (newIsValid !== isValid) {
    yield put(codepanelSetIsValid(newIsValid));
  }
}

const validate = (code, reg) => (reg ? !!code.match(reg) : true);

const saveCode = (code) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("code", code);
  }
  // if (authId) {
  //   firebaseSaveCode(authId, code);
  // }
};

// const saveCheckPointsAndProgress = ({
//   authId,
//   checkpoints,
//   count,
//   progress,
//   lastCheckpoint
// }) => {
//   console.log("save");
//   if (typeof localStorage !== "undefined") {
//     localStorage.setItem("checkpoints", JSON.stringify(checkpoints));
//     localStorage.setItem("checkpoints-count", count);
//   }
//   let index = 0;
//   let preparedCheckpoints = {};
//   for (let i = 0; i < count; i++) {
//     if (checkpoints[i].status === 1) {
//       preparedCheckpoints[index] = i + 1;
//       index++;
//     }
//   }
//   firebaseSaveCheckpoints(authId, preparedCheckpoints);
//   firebaseSaveProgress(authId, Math.round(progress));
//   firebaseSaveLastCheckpont(authId, lastCheckpoint);
// };
