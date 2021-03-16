import * as authFetch from "../../../shared/lib/authorizedFetch";

import { lesson_data } from "../data/INTRO-5MIN-M-V007/lesson_data";

const courseId = "C001";
const projectId = "P000";
const trainingId = "L001";


export const uploadLesson = () => {
  const  data = {
    ...lesson_data,
    courseId,
    projectId,
    trainingId
  };

  authFetch.firebaseUpdate(
    `Lessons/${trainingId}`,
    data
  );
}
