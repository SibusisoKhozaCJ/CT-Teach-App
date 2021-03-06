import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";

import {
  codepanelSetResetIsActive,
  codepanelSetCode, codepanelSetIsValid, codepanelSetTab, codepanelSetSlideNumber
} from "../../../redux/actions/codepanel-actions";

const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    // backgroundColor: "rgba(0,0,0,0.2)",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 30,
    textAlign: "center",
    border: "5px solid #43D4DD"
  },
  header: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",

    ["@media (min-width:768px)"]: {
      fontSize: 25,
    }
  },
  text: {
    fontSize: 16,
    fontWeight: "medium",

    ["@media (min-width:768px)"]: {
      fontSize: 22,
    }
  },
  buttons: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  btnYes:{
    order: 0,
    borderRadius: 40,
    textAlign: "center",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    border: "4px solid #fff",
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "6px 26px",
    zIndex: 10,
    display: "flex",
    alignItems: "center",

    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    },

    ["@media (min-width:768px)"]: {
      fontSize: 25,
      padding: "11px 45px"
    }
  },
  btnLeave: {
    zIndex: 1,
    display: "flex",
    order: 1,
    margin: 0,
    marginLeft: -45,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1,
    backgroundColor: "#43D4DD",
    border: "4px solid #fff",
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "6px 32px 6px 58px",
    borderRadius: 40,

    ["@media (min-width:768px)"]: {
      fontSize: 25,
      padding: "11px 45px 11px 70px"
    }
  }
}));

const ResetModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentSlideNumber = useSelector(state => state.codepanel.currentSlide);
  const closeHandler = () => {
    dispatch(codepanelSetResetIsActive(false));
  }

  const resetHandler = () => {
    dispatch(codepanelSetCode(""));
    dispatch(codepanelSetResetIsActive(false));
    dispatch(codepanelSetIsValid(false));
    dispatch(codepanelSetTab(0));
    setTimeout(() => {
      dispatch(codepanelSetSlideNumber(currentSlideNumber - 1 ));
    }, 1000);
  }

  return (
    <div className={classes.container}>
      <div
        className={classes.overlay}
        onClick={closeHandler}
      />
      <div className={classes.modal}>
        <h3 className={classes.header}>
          Are you sure you want to reset this lesson?
        </h3>
        <div className={classes.buttons}>
          <button
            role="button"
            className={classes.btnYes}
            onClick={resetHandler}
          >
            Yes
          </button>
          <button
            role="button"
            className={classes.btnLeave}
            onClick={closeHandler}
          >
            Hmmm, maybe not
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetModal;
