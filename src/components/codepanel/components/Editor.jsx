import React, { useState, Suspense } from 'react';
import Monaco from '@monaco-editor/react'
import { useDispatch, useSelector } from "react-redux";

import {
  codepanelSetCode,
  codepanelSetEditor
} from '../../../redux/actions/codepanel-actions'

const Editor = () => {
  const storedCode = useSelector(state => state.codepanel.code)
  const [code, setCode] = useState(storedCode)
  const [timer, setTimer] = useState(null);

  const dispatch = useDispatch();

  const editorDidMount = editor => {
    dispatch(codepanelSetEditor(editor));
    // editor.focus();
  };

  const onChangeHandler = (newValue) => {
    setCode(newValue)
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        dispatch(codepanelSetCode(newValue));
      }, 500)
    );
  }

  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#1E1E1E"
      }}
    >
      <Suspense fallback={<div>loading</div>}>
          <Monaco
            onMount={editorDidMount}
            language="html"
            onChange={onChangeHandler}
            options={options}
            theme="vs-dark"
            value={code}
          />
      </Suspense>
    </div>
  );
}

export default Editor
