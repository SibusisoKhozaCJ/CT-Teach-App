import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";

import CodepanelLogoIcon from "../../../assets/images/codepanel-logo.png";
import CloseIcon from "../../../assets/images/close-icon.png";
import ProjectsIcon from "../../../assets/images/rocket-icon.png";
import SkillsIcon from "../../../assets/images/skills.svg";
import ScriptsIcon from "../../../assets/images/scripts-icon.png";
import CheatsheetIcon from "../../../assets/images/cheatsheet-icon.png";
import ShareIcon from "../../../assets/images/share.svg";
import InviteIcon from "../../../assets/images/invite-icon.png";
import ScreenshotIcon from "../../../assets/images/screenshot-icon.png";
import FeedbackIcon from "../../../assets/images/feedback.svg";
import LockIcon from "../../../assets/images/lock-icon.png";

import ProjectsModal from "./projects/projects-modal";
import { codepanelSetProjectsIsActive } from "../../../redux/actions/codepanel-actions";

const  useStyles = makeStyles(theme => ({
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "fixed",
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 100
  },
  container: {
    padding: "0 8px",
    position: "fixed",
    minHeight: "100vh",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#fff",
    minWidth: 68,
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    zIndex: 100,
    justifyContent: "space-between",
    MsOverflowStyle: "none",
    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none"
    }
  },

  divider: {
    margin: "0 auto",
    width: 36,
    height: 2,
    backgroundColor: "#43D4DD"
  },

  icon: {
    color: "#000",
    fontSize: 9,
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "relative",

    "& .MuiIconButton-label": {
      flexDirection: "column",
    },

    ["@media (max-width:767px)"]: {
      "& img": {
        width: "18px !important",
        marginBottom: 6
      }
    },

    "& img": {
      width: 36,
      marginBottom: 6
    }
  },

  lockIcon: {
    position: "absolute",
    top: 6,
    right: 16,
    width: "16px !important",
  }
}));

const SideMenu = ({ closeHandler }) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.overlay} onClick={closeHandler}/>

      <div className={classes.container}>
        <IconButton onClick={closeHandler} className={classes.icon}>
          <img src={CodepanelLogoIcon} className="coverage" alt="" style={{ maxWidth: 30 }}/>
        </IconButton>
        <div className={classes.divider} />
        <IconButton
          onClick={() => {
            closeHandler();
            dispatch(codepanelSetProjectsIsActive(true));
          }}
          className={classes.icon}
        >
          <img src={ProjectsIcon} className="coverage" alt="" />
          <span>Projects</span>
        </IconButton>
        <IconButton onClick={() => {}} className={classes.icon}>
          <img src={SkillsIcon} className="coverage" alt="" />
          <span>Skills</span>
          <img src={LockIcon} className={`coverage ${classes.lockIcon}`} alt="" />
        </IconButton>
        <IconButton onClick={() => {}} className={classes.icon}>
          <img src={ScriptsIcon} className="coverage" alt="" />
          <span>Scripts</span>
          <img src={LockIcon} className={`coverage ${classes.lockIcon}`} alt="" />
        </IconButton>
        <IconButton onClick={() => {}} className={classes.icon}>
          <img src={CheatsheetIcon} className="coverage" alt="" />
          <span>Cheatsheet</span>
          <img src={LockIcon} className={`coverage ${classes.lockIcon}`} alt="" />
        </IconButton>
        <div className={classes.divider} />
        <IconButton onClick={() => {}} className={classes.icon}>
          <img src={ShareIcon} className="coverage" alt="" />
          <span>Share</span>
        </IconButton>
        <IconButton onClick={() => {}} className={classes.icon}>
          <img src={InviteIcon} className="coverage" alt="" />
          <span>Invite</span>
        </IconButton>
        <IconButton onClick={() => {}} className={classes.icon}>
          <img src={ScreenshotIcon} className="coverage" alt="" />
          <span>Screenshot</span>
          <img src={LockIcon} className={`coverage ${classes.lockIcon}`} alt="" />
        </IconButton>
        <div className={classes.divider} />
        <IconButton onClick={() => {}} className={classes.icon}>
          <img src={FeedbackIcon} className="coverage" alt="" />
          <span>Feedback</span>
        </IconButton>
        <IconButton onClick={closeHandler} style={{ justifySelf: "flex-end" }}>
          <img src={CloseIcon} className="coverage" alt="" />
        </IconButton>
        {/* {isModalOpen ? <ProjectsModal closeHandler={closeModalHandler} closeSidebar={closeHandler}/> : null} */}
      </div>
    </>
  )
}

export default SideMenu;
