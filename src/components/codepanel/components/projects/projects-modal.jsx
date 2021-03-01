import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

import CloseIcon from "../../../../assets/images/close-icon.png";
import ModalMobile from "./components/modal-mobile";
import ModalDesktop from "./components/modal-desktop";
import { codepanelSetProjectsIsActive } from "../../../../redux/actions/codepanel-actions";

const  useStyles = makeStyles(theme => ({
  modal: {
    position: "fixed",
    padding: 6,
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    borderRadius: 20,
    backgroundColor: "#ccc",
    zIndex: 2000,

    ["@media (max-width:767px)"]: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 10,
      backgroundColor: "#fff",
    }
  },

  close: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#c4c4c4",
    borderRadius: "50%"
  }
}));

const ProjectsModal = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:768px)");
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(codepanelSetProjectsIsActive(false));
  }

  return (
    <div className={classes.modal}>
      {isDesktop ? <ModalDesktop closeSidebar={closeHandler}/> : <ModalMobile closeSidebar={closeHandler} />}
      <IconButton onClick={closeHandler} className={classes.close}>
        <img src={CloseIcon} className="coverage" alt="" />
      </IconButton>
    </div>
  )
}

export default ProjectsModal;
