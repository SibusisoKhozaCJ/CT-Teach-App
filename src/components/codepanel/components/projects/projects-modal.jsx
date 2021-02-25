import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "../../../../assets/images/close-icon.png";
import ModalMobile from "./components/modal-mobile";
import ModalDesktop from "./components/modal-desktop";

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
    zIndex: 1000
  },

  close: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#c4c4c4",
    borderRadius: "50%"
  }
}));

const ProjectsModal = ({ closeHandler, closeSidebar }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <div className={classes.modal}>
      {isDesktop ? <ModalDesktop closeSidebar={closeSidebar}/> : <ModalMobile closeSidebar={closeSidebar} />}
      <IconButton onClick={closeHandler} className={classes.close}>
        <img src={CloseIcon} className="coverage" alt="" />
      </IconButton>
    </div>
  )
}

export default ProjectsModal;
