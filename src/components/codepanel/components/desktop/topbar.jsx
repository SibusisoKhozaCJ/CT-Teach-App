import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import FaceIcon from "@material-ui/icons/Face";
import TimerIcon from "@material-ui/icons/Timer";

import MainMenu from "../menu/main-menu";

const useStyles = makeStyles(theme => ({
  topBar: {
  },
  logo: {
    // marginRight: "auto",
    color: theme.palette.secondary.contrastText
  },
  topBarWrapper: {
    display: "flex",
    width: "100%"
  },
  topBarField: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

const TopBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setIsMenuOpen] = useState(false);

  const closeHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={classes.topBar}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.topBarWrapper}>
            <div className={classes.topBarField}>
              <Typography className={classes.logo} color="inherit" variant="h6">
                CodeJika
              </Typography>
              <IconButton
                aria-label="Full Screen"
                onClick={() => {}}
                title="Full Screen"
              >
                <FullscreenIcon className={classes.button} />
              </IconButton>
            </div>

            <div className={classes.topBarField}>
              <IconButton
                aria-label="Open Folder"
                onClick={() => {}}
                title="Open Folder"
              >
                <FolderOpenIcon className={classes.button} />
              </IconButton>
              <IconButton
                aria-label="Call Teacher"
                onClick={() => {}}
                title="Call Teacher"
              >
                <FaceIcon className={classes.button} />
              </IconButton>
            </div>

            <div className={classes.topBarField}>
              <IconButton aria-label="Timer" onClick={() => {}} title="Timer">
                <TimerIcon className={classes.button} />
              </IconButton>
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
          </div>
        </Toolbar>
      </AppBar>
      <MainMenu anchorEl={anchorEl} closeHandler={closeHandler} open={open} />
    </div>
  );
};

export default TopBar;
