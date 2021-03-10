import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(() => ({
  previewContainer: {
    width: "100%",
    height: "100%",
    border: "none",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    position: "relative"
  },
  previewOverlay: {
    position: "absolute",
    display: "block",
    content: "",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  previewIframe: {
    width: "100%",
    height: "100%",
    border: "none"
  },
  emptyPreview: {
    padding: 0,
    paddingTop: 50,
    width: "100%",
    height: "100%",
    border: "none",
    fontSize: 16,
    color: "#bbb",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    margin: "auto",
  },

  lock: {
    position: "absolute",
    bottom: 40,
    right: 30,
    color: "grey",
    zIndex: 1,
    fill: "grey",
    width: 40,
    height: 40,
    display: "inline-block",
    transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    userSelect: "none",
  }
}));

const Preview = () => {
  const classes = useStyles();
  const preview = useSelector(state => state.codepanel.code);
  const [isLocked, setIsLoced] = useState(true);
  const isDesktop = useMediaQuery("(min-width:758px)");

  return (
    <div className={classes.previewContainer}>
      {preview.length > 0 ? (
        <iframe title="code preview" className={classes.previewIframe} srcDoc={preview} />
      ) : (
        <div className={classes.emptyPreview}>
            <p>No previw available</p>
            <p>time to get coding</p>
        </div>
      )}
      <iframe title="code preview" className={classes.previewIframe} srcDoc={preview} />
      {isLocked && (
        <div className={classes.previewOverlay} />
      )}
      {!isDesktop && (
        <div
          className={classes.lock}
          onClick={() => setIsLoced(!isLocked)}
        >
          <svg className={classes.lockSvg} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            {isLocked ? (
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
            ) : (
              <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path>
            )}
          </svg>
        </div>
      )}
    </div>
  );
};

export default Preview;
