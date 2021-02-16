import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import TimerIcon from "@material-ui/icons/Timer";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CodeIcon from "@material-ui/icons/Code";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MenuIcon from "@material-ui/icons/Menu";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import FaceIcon from "@material-ui/icons/Face";

import MainMenu from "../menu/main-menu";
import { codepanelSetTab } from '../../../../redux/actions/codepanel-actions';

const useStyles = makeStyles(() => ({
  mobileTopBar: {
    position: "fixed",
    top: 0,
    '& .MuiToolbar-regular': {
      minHeight: 50
    }
  },

  mobieleTopBarWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const MobileTopBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const index = useSelector(state => state.codepanel.tab);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setIsMenuOpen] = useState(false);

  const closeHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar className={classes.mobileTopBar} position="static">
      <Toolbar className={classes.mobieleTopBarWrapper}>
        {index === 1 ? (
          <IconButton aria-label="Folder" onClick={() => {}} title="Folder">
            <FolderOpenIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="Timer" onClick={() => {}} title="Timer">
            <TimerIcon />
          </IconButton>
        )}

        <Tabs
          aria-label="lesson tabs"
          id="unit-page-tabs"
          indicatorColor="primary"
          onChange={(e, v) => {
            dispatch(codepanelSetTab(v));
          }}
          textColor="primary"
          value={index}
          variant="fullWidth"
        >
          <Tab
            aria-label="Lesson"
            icon={<AssignmentIcon />}
            {...a11yProps(0)}
          />
          <Tab aria-label="Code" icon={<CodeIcon />} {...a11yProps(1)} />
          <Tab
            aria-label="Preview"
            icon={<VisibilityIcon />}
            {...a11yProps(2)}
          />
        </Tabs>

        {index === 1 ? (
          <IconButton aria-label="Teacher" onClick={() => {}} title="Teacher">
            <FaceIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="Menu"
            title="Menu"
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
              setIsMenuOpen(open => !open);
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <MainMenu anchorEl={anchorEl} closeHandler={closeHandler} open={open} />
    </AppBar>
  );
};

export default MobileTopBar;