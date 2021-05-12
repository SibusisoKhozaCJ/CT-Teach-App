import React, { useEffect, useState } from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import { getLesson } from "./data/getLesson";
import MobileLayout from './components/mobile/mobile-layout';
import DesktopLayout from './components/desktop/desktop-layout';
import Editor from './components/editor';
import Preview from './components/preview';
import Slider from './components/slider';
import {
  codepanelSetSlides,
  codepanelSetChallenges,
  codepanelSetChallengesCount,
  codepanelSetCode,
  codepanelSetProgress,
  codepanelSetSlideNumber,
  codepanelSetBlockUpdate,
  codepanelSetCurrentLesson,
} from '../../redux/actions/codepanel-actions';
// import { getCodeFromLocal } from "./utils/localStorage"
import * as authFetch from "../../shared/lib/authorizedFetch";
import ProjectsModal from "./components/projects/projects-modal";
import LeaveModal from "./components/leave-modal";
import TakeTour from "./components/take-tour";
import ResetModal from "./components/reset-modal";
import { currentUserId } from "../../shared/lib/authentication";
import ToolTip from './components/tool-tip/tool-tip';
import lesson_dataC0001P001T000 from "./data-new/C001-P001-T000/lesson_data";
import lesson_dataC0001P001T001 from "./data-new/C001-P001-T001/lesson_data";
import lesson_dataC0001P001T002 from "./data-new/C001-P001-T002/lesson_data";
import lesson_dataC0001P001T003 from "./data-new/C001-P001-T003/lesson_data";
import lesson_dataC0001P001T004 from "./data-new/C001-P001-T004/lesson_data";
import lesson_dataC0001P001T005 from "./data-new/C001-P001-T005/lesson_data"; //P2T1
import lesson_dataC0001P001T006 from "./data-new/C001-P001-T006/lesson_data"; //P2T2
import lesson_dataC0001P001T007 from "./data-new/C001-P001-T007/lesson_data"; //P2T3
import lesson_dataC0001P001T008 from "./data-new/C001-P001-T008/lesson_data"; //P2T4
import lesson_dataC0001P001T009 from "./data-new/C001-P001-T009/lesson_data"; //P2T5
import lesson_dataC0001P001T010 from "./data-new/C001-P001-T010/lesson_data"; //P2T6
import { uploadLesson } from './utils/upload-lesson';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Loading from "../../shared/components/loader/Loading";

const Codepanel = ({
  match: {
    params: { courseId, projectId, trainingId },
  },
}) => {
  const dispatch = useDispatch();
  // const lesson = getLesson(trainingId);
  // const userId = useSelector(state => state.user.userId);
  const userId = currentUserId();
  // const lessonId = "5-min-website";
  const isProjectsActive = useSelector((state) => state.codepanel.isProjectsActive);
  const isLeaveActive = useSelector((state) => state.codepanel.isLeaveActive);
  const isTourActive = useSelector((state) => state.codepanel.isTourActive);
  const isResetActive = useSelector((state) => state.codepanel.isResetActive);
  const currentLesson = useSelector((state) => state.codepanel.currentLesson);
  const currentSlideNumber = useSelector(
    (state) => state.codepanel.currentSlide
  );

  const [panel, setPanels] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loader, setLoader] = useState(null);
  const lessonPath = `${courseId}/${projectId}/${trainingId}`;
  console.log(" lessonPath=== ", lessonPath)
  const history = useHistory();

  const getProgressData = async (userId, trainingId) => {
    return await authFetch.firebaseGet(`User_profile/${userId}/${trainingId}`);
  };

  const getLesson = async (id) => {
    if(id === "T000"){
      return lesson_dataC0001P001T000;
    }if(id === "T001"){
      return lesson_dataC0001P001T001;
    }if(id === "T002"){
      return lesson_dataC0001P001T002;
    }if(id === "T003"){
      return lesson_dataC0001P001T003;
    }if(id === "T004"){
    return lesson_dataC0001P001T004;
    }if(id === "T005"){
      return lesson_dataC0001P001T005;
    }if(id === "T006"){
      return lesson_dataC0001P001T006;
    }if(id === "T007"){
      return lesson_dataC0001P001T007;
    }if(id === "T008"){
      return lesson_dataC0001P001T008;
    }if(id === "T009"){
      return lesson_dataC0001P001T009;
    }if(id === "T010"){
      return lesson_dataC0001P001T010;
    }
	else{
      return await authFetch.firebaseGet(`Lessons/${id}`);
    }
  };


  const slideChangeHandler = (e) => {
    e.preventDefault();
    if (e.target.value === 'top') {
      dispatch(codepanelSetSlideNumber(currentSlideNumber - 1));
    }
    if (e.target.value === 'bottom') {
      dispatch(codepanelSetSlideNumber(currentSlideNumber + 1));
    }
  };
  const isDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    // uploadLesson();
    dispatch(codepanelSetBlockUpdate(true));


    if (currentLesson !== lessonPath) {
      getLesson(trainingId).then((data) => {
        console.log(" lession data in codepanel === ", data)
        if (data) {
          setTimeout(() => {
            dispatch(codepanelSetSlides(data));
            dispatch(codepanelSetCurrentLesson(lessonPath));
            setLesson(data);
            setLoader(true)
          },3000)

        }
      });
    }

    // if (typeof localStorage !== "undefined") {
    //   const code = getCodeFromLocal();
    //   if (code) {
    //     dispatch(codepanelSetCode(code));
    //   }
    // }
    if (!lesson) {
      return;
    }

    let count = 0;
    let challenges = {};
    for (let i = 0; i < lesson.slides.length; i++) {
      if (lesson.slides[i].reg) {
        const validators = lesson.slides[i].reg.map(() => false);
        challenges[count] = { progress: 0, validators };
        count++;
      }
    }
    dispatch(codepanelSetChallengesCount(count));
    dispatch(codepanelSetChallenges(challenges));

    if (userId) {
      getProgressData(userId, lessonPath).then((data) => {
        if (data) {
          const { challenges, progress, current_slide, user_code } = data;
          progress && dispatch(codepanelSetProgress(progress));
          current_slide && dispatch(codepanelSetSlideNumber(current_slide));
          challenges && dispatch(codepanelSetChallenges(challenges));
          user_code && dispatch(codepanelSetCode(user_code));
        }
        dispatch(codepanelSetBlockUpdate(false));
      });
    }
  }, [userId, lessonPath, lesson]);

  if (isDesktop && !loader) {
    return (
        <div className="loader">
          <Loading />
        </div>
    );
  }
  const panels = {
    slider: <Slider style={{ overflowY: 'hidden' }} />,
    editor: <Editor />,
    preview: <Preview />,
  };

  console.log("userId===>", userId);
  return (
    <>
      {panels && lesson && (
        <Media
          queries={{
            mobile: '(max-width: 767px)',
            desktop: '(min-width: 768px)',
          }}
        >
          {(matches) => (
            <>
              {matches.desktop && (
                <DesktopLayout
                  {...panels}
                  slideChangeHandler={slideChangeHandler}
                />
              )}
              {matches.mobile && <MobileLayout {...panels} />}
            </>
          )}
        </Media>
      )}
    {isProjectsActive && <ProjectsModal />}
    {isLeaveActive && <LeaveModal />}
    {isTourActive && <ToolTip />}
    {isResetActive && <ResetModal />}
    </>
  );
};

export default Codepanel;
