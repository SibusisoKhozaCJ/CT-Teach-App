import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";

import Topbar from './topbar'
import Bottombar from './bottombar'

const DesktopLayout = ({ editor, preview, slider }) => {
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
        <ReflexSplitter />
        <ReflexElement flex={1}>{editor}</ReflexElement>
        <ReflexSplitter />
        <ReflexElement flex={1}>{preview}</ReflexElement>
      </ReflexContainer>
      <Bottombar />
    </div>
  )
}

export default DesktopLayout
