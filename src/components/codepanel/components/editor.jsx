import React, { useState, Suspense, useEffect, useRef } from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Monaco from '@monaco-editor/react'
import { useDispatch, useSelector } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/theme/monokai.css";
// import "codemirror/keymap/sublime";

import {
  codepanelSetCode,
  codepanelSetEditor,
  codepanelSetIsValid,
  codepanelSetCheckpoints,
  codepanelSetProgress,
  codepanelSetTextareaRef
} from "../../../redux/actions/codepanel-actions";
import { saveCodeToLocal } from "../utils/localStorage";
import Tick from "./tick/tick";
import * as authFetch from "../../../shared/lib/authorizedFetch";
import Checker from "../components/checker/checker";

let timer = null;

export const debounce = (fn, time) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, time);
};

const Editor = () => {
  const storedCode = useSelector(state => state.codepanel.code);
  const fontSize = useSelector(state => state.codepanel.fontSize);
  const [code, setCode] = useState(storedCode);
  const [isAnimation, setIsAnimation] = useState(false);
  const lesson = useSelector(state => state.codepanel.slides);
  const currentSlide = useSelector(state => state.codepanel.currentSlide);
  const isValid = useSelector(state => state.codepanel.isValid);
  const userId = useSelector(state => state.user.userId);
  const lessonId = "5-min-website";
  const checkpoints = useSelector(state => state.codepanel.checkpoints);
  const checkpointsCount = useSelector(state => state.codepanel.checkpointsCount);
  const isDesktop = useMediaQuery("(min-width:768px)");
  const textareaRef = useRef(null);

  let challengesPrepared = null

  let rules = null

  if (lesson.slides[currentSlide]) {
    rules = lesson.slides[currentSlide].reg || null
  }

  if (rules) {
    const currentCheckpoint = checkpoints[lesson.slides[currentSlide].checkpoint_id]
    if (currentCheckpoint.challenges) {
      challengesPrepared = rules.map((rule, index) => ({
        description: rule.description,
        status: currentCheckpoint.challenges[index]
      }))
    }
  }

  const dispatch = useDispatch();

  const lines = code.split("\n").length;

  const linesRendered = []
  for (let i = 0; i < lines; i++) {
    linesRendered.push(
      <div
        key={i}
        style={{
          width: "100%",
          display: "block",
          textAlign: "right",
          lineHeight: "1.5",
          fontSize: 20,
          color: "#6c757d"
        }}
      >
        {i + 1}
      </div>
    )
  }

  const onUpdate = editor => {
    dispatch(codepanelSetEditor(editor));
    // editor.focus();
  };

  // const validate = (code) => (reg ? !!code.match(reg) : true);
  const validate = (code) => {
    if (!rules) {
      return { progress: 100 }
    }

    const count = rules.length
    let completed = 0
    const challenges = rules.map(rule => {
      if (!!code.match(rule.rule)) {
        completed++
        return true
      }
      return false
    })

    const progress = Math.ceil((completed / count) * 100);

    return { progress, challenges }
  }

  useEffect(() => {
    dispatch(codepanelSetTextareaRef(textareaRef))
  }, [dispatch, textareaRef])

  useEffect(() => {
    const isCheckpoint = lesson.slides[currentSlide].checkpoint;

    if (!isCheckpoint) {
      dispatch(codepanelSetIsValid(true));
      if (userId) {
        const data = {
          current_slide: currentSlide,
          user_code: storedCode,
          last_updated: new Date().toISOString()
        };
        authFetch.firebaseUpdate(
          `user_profile/${userId}/lesson_progress/${lessonId}`,
          data
        );
      }

      return;
    }

    const checkpoint_id = lesson.slides[currentSlide].checkpoint_id || null;

    if (checkpoints[checkpoint_id].progress !== 100) {
      const validated = validate(storedCode)
      if ((validated.progress === 100) && !isValid) {
        setIsAnimation(true);
        setTimeout(() => setIsAnimation(false), 1400);
      } else {
        setIsAnimation(false);
      }

      let newCheckpoints = {...checkpoints, [checkpoint_id]: validated};
      let checkpoints_completed = 0
      for (let i=1; i <= checkpointsCount; i++) {
        if (checkpoints[i].progress === 100) {
          checkpoints_completed++
        }
      }
      const progress = Math.ceil((checkpoints_completed / checkpointsCount) * 100);

      dispatch(codepanelSetIsValid(validated.progress === 100));
      dispatch(codepanelSetCheckpoints(newCheckpoints))
      dispatch(codepanelSetProgress(progress))

      const data = {
        user_code: storedCode,
        current_slide: currentSlide,
        progress,
        checkpoints: newCheckpoints,
        last_updated: new Date().toISOString()
      }

      if (userId) {
        authFetch.firebaseUpdate(
          `user_profile/${userId}/lesson_progress/${lessonId}`,
          data
        );
      }

    }

  }, [currentSlide, storedCode])

  const onChange = (i) => {
    const newValue = i.getValue();
    setCode(newValue);
    debounce(() => {
      dispatch(codepanelSetCode(newValue));
      saveCodeToLocal(newValue);
    }, 1000);
  };

  const textareaInputHandler = (e) => {
    const newValue = e.target.value;
    setCode(newValue);
    debounce(() => {
      dispatch(codepanelSetCode(newValue));
      saveCodeToLocal(newValue);
    }, 1000);
  }

  return (
    <form
      autocomplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellcheck="false"
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#1E1E1E",
        position: "relative"
      }}
    >
      {isDesktop ? (
        <Suspense fallback={<div>loading</div>}>
            <CodeMirror
              onChange={onChange}
              onUpdate={onUpdate}
              options={{
                theme: "monokai",
                tabSize: 2,
                // keyMap: "sublime",
                mode: "jsx"
              }}
              spellcheck="false"
              styles={{ fontSize }}
              value={code}
            />
        </Suspense>
      ) : (
        <div style={{ width: "100%", height: "100%", display: "flex" }}>
          <div style={{
            marginTop: 2,
            width: 50,
            height: "100%",
            backgroundColor: "#333",
            display: "flex",
            flexDirection: "column"
            }}
          >
            {linesRendered}
          </div>
          <textarea
            ref={textareaRef}
            autocomplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellcheck="false"
            value={code}
            style={{
              flexGrow: 1,
              backgroundColor: "#1e1e1e",
              color: "#fff",
              width: "100%",
              height: "100%"
            }}
            onInput={e => textareaInputHandler(e)}
          />
        </div>
      )}
      {isAnimation ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Tick size="96px" />
        </div>
      ) : null}
      {challengesPrepared && <Checker challenges={challengesPrepared} />}
    </form>
  );
}

export default Editor
