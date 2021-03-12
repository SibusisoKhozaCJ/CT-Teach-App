import React, { useEffect, useState } from 'react';
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// import { getLesson } from "./data/getLesson";
import MobileLayout from './components/mobile/mobile-layout'
import DesktopLayout from './components/desktop/desktop-layout'
import Editor from './components/editor'
import Preview from './components/preview'
import Slider from './components/slider'
import {
  codepanelSetSlides,
  codepanelSetChallenges,
  codepanelSetChallengesCount,
  codepanelSetCode,
  codepanelSetProgress,
  codepanelSetSlideNumber,
  codepanelSetBlockUpdate,
  codepanelSetCurrentLesson
} from '../../redux/actions/codepanel-actions';
// import { getCodeFromLocal } from "./utils/localStorage"
import * as authFetch from "../../shared/lib/authorizedFetch";
import ProjectsModal from "./components/projects/projects-modal";
import LeaveModal from "./components/leave-modal";
import TakeTour from "./components/take-tour";
import ResetModal from "./components/reset-modal";
import { currentUserId } from "../../shared/lib/authentication";

import { uploadLesson } from "./utils/upload-lesson";

const Codepanel = ({ match: { params: { courseId, projectId, trainingId } } }) => {
  const dispatch = useDispatch();
  // const lesson = getLesson(trainingId);
  // const userId = useSelector(state => state.user.userId);
  const userId = currentUserId();
  // const lessonId = "5-min-website";
  const isProjectsActive = useSelector(state => state.codepanel.isProjectsActive);
  const isLeaveActive = useSelector(state => state.codepanel.isLeaveActive);
  const isTourActive = useSelector(state => state.codepanel.isTourActive);
  const isResetActive = useSelector(state => state.codepanel.isResetActive);
  const currentLesson = useSelector(state => state.codepanel.currentLesson);
  const [panel, setPanels] = useState(null);
  const [lesson, setLesson] = useState(null);
  const lessonPath = `${courseId}/${projectId}/${trainingId}`

  const history = useHistory()

  const getProgressData = async (userId, trainingId) => {
    return await authFetch.firebaseGet(
      `user_profile/${userId}/lesson_progress/${trainingId}`
    );
  }

  const getLesson = async (id) => {
    return await authFetch.firebaseGet(
      `Lessons/${id}`
    );
  }

  useEffect(() => {
    // uploadLesson();
    dispatch(codepanelSetBlockUpdate(true));
    if (currentLesson !== lessonPath) {
      // const l = getLesson("5-min-website");
      // dispatch(codepanelSetSlides(l));
      // dispatch(codepanelSetCurrentLesson(lessonPath));
      // setLesson(l);
      getLesson(trainingId).then(data => {
        if (data) {
          dispatch(codepanelSetSlides(data));
          dispatch(codepanelSetCurrentLesson(lessonPath));
          setLesson(data);
        }
      })
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
      getProgressData(userId, lessonPath).then(data => {
        if (data) {
          const { challenges, progress, current_slide, user_code } = data
          progress && dispatch(codepanelSetProgress(progress));
          current_slide && dispatch(codepanelSetSlideNumber(current_slide));
          challenges && dispatch(codepanelSetChallenges(challenges))
          user_code && dispatch(codepanelSetCode(user_code))
        }
        dispatch(codepanelSetBlockUpdate(false));
      })
    }

  }, [userId, lessonPath, lesson]);

  const panels = {
    slider: <Slider style={{ overflowY: 'hidden' }} />,
    editor: <Editor />,
    preview: <Preview />
  }

  return (
    <>
      {panels && lesson && (
        <Media
        queries={{
          mobile: "(max-width: 767px)",
          desktop: "(min-width: 768px)"
        }}
      >
        {matches => (
          <>
            {matches.desktop && (
              <DesktopLayout {...panels}/>
            )}
            {matches.mobile && (
              <MobileLayout {...panels}/>
            )}
          </>
        )}
      </Media>
      )}
    {isProjectsActive && <ProjectsModal />}
    {isLeaveActive && <LeaveModal />}
    {isTourActive && <TakeTour />}
    {isResetActive && <ResetModal />}
    </>
  )
};

export default Codepanel
