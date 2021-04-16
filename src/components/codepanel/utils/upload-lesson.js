import * as authFetch from "../../../shared/lib/authorizedFetch";

import { lesson_data } from "../data/INTRO-5MIN-M-V007/lesson_data";
import lesson_dataC0001P001T003 from "../data-new/C001-P001-T003/lesson_data";

const courseId = "C001";
const projectId = "P001";
const trainingId = "T003";


export const uploadLesson = () => {
  const  data = {
    ...lesson_dataC0001P001T003,
    courseId,
    projectId,
    trainingId
  };

  authFetch.firebaseUpdate(
    `Lessons/${trainingId}`,
    data
  );
}
