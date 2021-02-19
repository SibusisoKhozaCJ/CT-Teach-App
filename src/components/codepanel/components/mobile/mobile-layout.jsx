import React, { useRef, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { useSelector, useDispatch } from "react-redux";

import Topbar from "./topbar";
import Bottombar from "./bottombar";
import { codepanelSetTab } from "../../../../redux/actions/codepanel-actions";
import Tutorial from "./tutorial";

const MobileLayout = ({ editor, slider, preview }) => {
  const dispatch = useDispatch();
  const index = useSelector(state => state.codepanel.tab);
  const slidesRef = useRef(null);
  const editorRef = useRef(null);
  const previewRef = useRef(null);

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0
      }}
    >
      <Topbar />
      <div style={{ width: "100%", height: 56 }} />
      <SwipeableViews
        index={index}
        style={{ flexGrow: 1, width: "100%", height: '100%'}}
        onChangeIndex={i => {
          // meditor.blur();
          switch (i) {
            case 1: {
              editorRef.current.focus();
              break;
            }
            case 2: {
              previewRef.current.focus();
              break;
            }
            default: {
              slidesRef.current.focus();
            }
          }
          dispatch(codepanelSetTab(i));
        }}
      >
        <div ref={slidesRef} style={{ height: "100%", width: "100%" }} tabIndex="0">
          {slider}
        </div>
        <div
          ref={editorRef}
          style={{ height: "100%", width: "100%", backgroundColor: "#1E1E1E" }}
          tabIndex="1"
        >
          {editor}
        </div>
        <div ref={previewRef} style={{ height: "100%", width: "100%" }} tabIndex="2">
          {preview}
        </div>
      </SwipeableViews>
      {index === 1 && <Tutorial />}
      <div />
      <Bottombar />
    </div>
  );
};

export default MobileLayout;
