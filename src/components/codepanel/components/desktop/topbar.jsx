import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

import { codepanelSetPreviewVisible } from "../../../../redux/actions/codepanel-actions";
import CodepanelLogoIcon from "../../../../assets/images/codepanel-logo.png";
import TeacherIcon from "../../../../assets/images/teacher-icon.png";
import TimerIcon from "../../../../assets/images/timer-icon.png";
import DarkModeIcon from "../../../../assets/images/dark-mode-icon.png";
import Split2Icon from "../../../../assets/images/split-2-icon.svg";
import Split3Icon from "../../../../assets/images/split-3-icon.svg";

import MainMenu from "../menu/main-menu";

const useStyles = makeStyles(theme => ({
  topBarRight: {
    marginLeft: "auto",
    display: "flex"
  },
  logo: {
    display: "flex",
    alignItems: "center"
  },
  logoContainer: {
    width: 28,
  },
  logoText: {
    marginLeft: 38,
    fontSize: 39,
    color: "#000",
    fontFamily: "'Righteous', cursive"
  },
  yellow: {
    margin: "0 30px",
    padding: "0 12px",
    display: "flex",
    borderRadius: 50,
    backgroundColor: "#FBDD3F"
  }
}));

const TopBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setIsMenuOpen] = useState(false);
  const isPreviewVisible = useSelector(state => state.codepanel.isPreviewVisible);
  const dispatch = useDispatch();

  const closeHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={classes.topBar}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logo}>
            <IconButton className={classes.logoContainer}>
              <img src={CodepanelLogoIcon} className="coverage" alt="" />
            </IconButton>
            <span className={classes.logoText}>
              CodeTribe.com
            </span>
          </div>
          <div className={classes.topBarRight}>
            <IconButton>
              <img src={TeacherIcon} className="coverage" alt="" />
            </IconButton>
            <IconButton>
              <img src={TimerIcon} className="coverage" alt="" />
            </IconButton>
            <div className={classes.yellow}>
              <IconButton>
                <img src={DarkModeIcon} className="coverage" alt="" />
              </IconButton>
              <IconButton onClick={() => {dispatch(codepanelSetPreviewVisible(!isPreviewVisible))}}>
                {isPreviewVisible ? (
                  <img src={Split2Icon} className="coverage" alt="" />
                ) : (
                  <img src={Split3Icon} className="coverage" alt="" />
                )}
              </IconButton>
              <IconButton
                aria-label="Full Screen"
                onClick={() => {}}
                title="Full Screen"
              >
                <FullscreenIcon className={classes.button} />
              </IconButton>
            </div>
              <IconButton
                aria-label="Menu"
                onClick={(e) => {
                  setAnchorEl(e.currentTarget);
                  setIsMenuOpen(open => !open);
                }}
                title="Menu"
              >
                <MenuIcon className={classes.button} />
              </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MainMenu anchorEl={anchorEl} closeHandler={closeHandler} open={open} />
    </div>
  );
};

export default TopBar;
