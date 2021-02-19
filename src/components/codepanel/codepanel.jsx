import React, { useEffect } from 'react';
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";

import { getLesson } from "./data/getLesson";
import MobileLayout from './components/mobile/mobile-layout'
import DesktopLayout from './components/desktop/desktop-layout'
import Editor from './components/editor'
import Preview from './components/preview'
import Slider from './components/slider'
import {
  codepanelSetSlides,
  codepanelSetCheckpoints,
  codepanelSetCheckpointsCount,
  codepanelSetCode,
  codepanelSetProgress,
  codepanelSetSlideNumber
} from '../../redux/actions/codepanel-actions'
import { getCodeFromLocal } from "./utils/localStorage"
import * as authFetch from "../../shared/lib/authorizedFetch";


const Codepanel = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch();
  const lesson = getLesson(id);
  const userId = useSelector(state => state.user.userId);
  const lessonId = "5-min-website";

  const getProgressData = async (userId, lessonId) => {
    return await authFetch.firebaseGet(
      `user_profile/${userId}/lesson_progress/${lessonId}`
    );
  }

  useEffect(() => {
    dispatch(codepanelSetSlides(lesson));

    if (typeof localStorage !== "undefined") {
      const code = getCodeFromLocal();
      if (code) {
        dispatch(codepanelSetCode(code));
      }

      let count = 0;
      let checkpoints = {};
      for (let i = 0; i < lesson.slides.length; i++) {
        if (lesson.slides[i].reg) {
          const challenges = lesson.slides[i].reg.map(() => false);
          checkpoints[count + 1] = { progress: 0, challenges };
          count++;
        }
      }
      dispatch(codepanelSetCheckpointsCount(count));
      dispatch(codepanelSetCheckpoints(checkpoints));

      if (userId) {
        getProgressData(userId, lessonId).then(data => {
          if (data) {
            const { checkpoints, progress, current_slide, user_code } = data
            progress && dispatch(codepanelSetProgress(progress));
            current_slide && dispatch(codepanelSetSlideNumber(current_slide));
            checkpoints && dispatch(codepanelSetCheckpoints(checkpoints))
            user_code && dispatch(codepanelSetCode(user_code))
          }
        })
      }

    }

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        let ivh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${ivh}px`);
      });
    }


  });

  const panels = {
    slider: <Slider style={{ overflowY: 'hidden' }} />,
    editor: <Editor />,
    preview: <Preview />
  }

  return (
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

  )
};

export default Codepanel
