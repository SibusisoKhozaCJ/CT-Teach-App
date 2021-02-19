import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

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
  }
}));

const Preview = () => {
  const classes = useStyles();
  const preview = useSelector(state => state.codepanel.code);

  return (
    <div className={classes.previewContainer}>
      <iframe title="code preview" className={classes.previewIframe} srcDoc={preview} />
      <div className={classes.previewOverlay} />
    </div>
  );
};

export default Preview;
