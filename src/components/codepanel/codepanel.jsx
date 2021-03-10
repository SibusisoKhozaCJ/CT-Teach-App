import React, { useEffect, useState } from 'react';
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { getLesson } from "./data/getLesson";
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
  codepanelSetBlockUpdate
} from '../../redux/actions/codepanel-actions';
import { getCodeFromLocal } from "./utils/localStorage"
import * as authFetch from "../../shared/lib/authorizedFetch";
import ProjectsModal from "./components/projects/projects-modal";
import LeaveModal from "./components/leave-modal";
import TakeTour from "./components/take-tour";
import ResetModal from "./components/reset-modal";
import { currentUserId } from "../../shared/lib/authentication";


const Codepanel = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch();
  const lesson = getLesson(id);
  // const userId = useSelector(state => state.user.userId);
  const userId = currentUserId();
  const lessonId = "5-min-website";
  const isProjectsActive = useSelector(state => state.codepanel.isProjectsActive);
  const isLeaveActive = useSelector(state => state.codepanel.isLeaveActive);
  const isTourActive = useSelector(state => state.codepanel.isTourActive);
  const isResetActive = useSelector(state => state.codepanel.isResetActive);
  const [panel, setPanels] = useState(null)

  const history = useHistory()

  const getProgressData = async (userId, lessonId) => {
    return await authFetch.firebaseGet(
      `user_profile/${userId}/lesson_progress/${lessonId}`
    );
  }

  useEffect(() => {
    dispatch(codepanelSetBlockUpdate(true));
    dispatch(codepanelSetSlides(lesson));

    // if (typeof localStorage !== "undefined") {
    //   const code = getCodeFromLocal();
    //   if (code) {
    //     dispatch(codepanelSetCode(code));
    //   }
    // }

    let count = 0;
    let challenges = {};
    for (let i = 0; i < lesson.slides.length; i++) {
      if (lesson.slides[i].reg) {
        const validators = lesson.slides[i].reg.map(() => false);
        challenges[count + 1] = { progress: 0, validators };
        count++;
      }
    }
    dispatch(codepanelSetChallengesCount(count));
    dispatch(codepanelSetChallenges(challenges));

    if (userId) {
      getProgressData(userId, lessonId).then(data => {
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

  }, [id, userId, lessonId]);

  // const navigateHandler = (e) => {
    // console.log("back")
    // const r = confirm("You pressed a Back button! Are you sure?!");
    // const r = false;
    // if (r == true) {
      // history.back();
    // } else {
      // history.pushState(null, null, window.location.pathname);
    // }
    // history.pushState(null, null, window.location.pathname);
  // }

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log("setup popstate listener")
  //     window.addEventListener('popstate', function(event) {
  //   // The popstate event is fired each time when the current history entry changes.

  //   // var r = confirm("You pressed a Back button! Are you sure?!");
  //   const r = false;

  //   if (r == true) {
  //       // Call Back button programmatically as per user confirmation.
  //       history.back();
  //       // Uncomment below line to redirect to the previous page instead.
  //       // window.location = document.referrer // Note: IE11 is not supporting this.
  //   } else {
  //       // Stay on the current page.
  //       history.pushState(null, null, window.location.pathname);
  //   }

  //   history.pushState(null, null, window.location.pathname);

// }, false);
  //   }
  // });

  const panels = {
    slider: <Slider style={{ overflowY: 'hidden' }} />,
    editor: <Editor />,
    preview: <Preview />
  }

  return (
    <>
      {panels && (
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
