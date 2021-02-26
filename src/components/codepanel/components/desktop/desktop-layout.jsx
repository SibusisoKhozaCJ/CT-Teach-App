import React from 'react';
import { useSelector } from "react-redux";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";

import Topbar from './topbar'
import Bottombar from './bottombar'

const DesktopLayout = ({ editor, preview, slider }) => {
  const isPreviewVisible = useSelector(state => state.codepanel.isPreviewVisible);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box"
      }}
    >
      <Topbar />
      <ReflexContainer
        flex={1}
        orientation="vertical"
        style={{ width: "100%", height: "100%" }}
      >
        <ReflexElement flex={1}>{slider}</ReflexElement>
        <ReflexSplitter style={{ zIndex: 0 }} />
        <ReflexElement flex={1}>{editor}</ReflexElement>
        {isPreviewVisible ? (
          <>
            <ReflexSplitter style={{ zIndex: 0 }} />
            <ReflexElement flex={1}>{preview}</ReflexElement>
          </>
        ) : null}
      </ReflexContainer>
      <Bottombar />
    </div>
  )
}

export default DesktopLayout
