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
  }
}));

const Preview = () => {
  const classes = useStyles();
  const preview = useSelector(state => state.codepanel.code);

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
      <div className={classes.previewOverlay} />
    </div>
  );
};

export default Preview;
