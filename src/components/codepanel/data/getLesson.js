import { lesson_data as intro } from "./INTRO-5MIN-M-V007/lesson_data";
import { lesson_data as basic } from "./P001-T01-M-V008/lesson_data";

export const getLesson = name => {
  switch (name) {
    case "2": {
      return { ...basic, id: 2 };
    }
    default: {
      return { ...intro, id: 1 };
    }
  }
};
