import React, { useEffect } from 'react';
import Media from "react-media";
import { useDispatch } from "react-redux";

import { getLesson } from "./data/getLesson";
import MobileLayout from './components/Mobile/MobileLayout'
import DesktopLayout from './components/Desktop/DesktopLayout'
import Editor from './components/Editor'
import Preview from './components/Preview'
import Slider from './components/Slider'
import {
  codepanelSetSlides,
  codepanelSetCheckpoints,
  codepanelSetCheckpointsCount,
  codepanelSetCode
} from '../../redux/actions/codepanel-actions'

const Codepanel = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch();
  const lesson = getLesson(id);

  dispatch(codepanelSetSlides(lesson))

  if (typeof localStorage !== "undefined") {
    const code = localStorage.getItem("code");
    if (code) {
      dispatch(codepanelSetCode(code));
    }

    let count = localStorage.getItem("checkpoints-count");
    let checkpoints = JSON.parse(localStorage.getItem("checkpoints"));
    if (!checkpoints || !count) {
      checkpoints = {};
      count = 0;
      for (let i = 0; i < lesson.slides.length; i++) {
        if (lesson.slides[i].reg) {
          checkpoints[count] = {
            status: 0,
            slide: i
          };
          count++;
        }
      }
    }
    dispatch(codepanelSetCheckpointsCount(count));
    dispatch(codepanelSetCheckpoints(checkpoints));
  }

  useEffect(() => {
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
