import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import PublishIcon from "@material-ui/icons/Publish";
import SaveIcon from "@material-ui/icons/Save";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";

import {
  codepanelIncSlideNumber,
  codepanelDecSlideNumber
} from "../../../../redux/actions/codepanel-actions"

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    flexGrow: 1,
  },
  bottomBarWrapper: {
    display: "flex",
    width: "100%"
  },
  bottomBarField: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  moreBtn: {
    "&:hover $morePopup": {
      display: "flex"
    }
  },
  morePopup: {
    display: "none",
    position: "absolute",
    right: "100%",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 25
  }
}));

const Bottombar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapse] = useState(false);

  return (
    <div className={classes.bottomBar}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.bottomBarWrapper}>
            <div className={classes.bottomBarField}>
              <Typography style={{ color: "#000" }}>
                Lesson Breadcrumbs
              </Typography>
            </div>
            <div className={classes.bottomBarField}>
              <Button
                className={classes.pagination}
                onClick={() => dispatch(codepanelDecSlideNumber())}
                variant="outlined"
              >
                Back
              </Button>
              <Button
                className={classes.pagination}
                onClick={() => dispatch(codepanelIncSlideNumber())}
                variant="outlined"
              >
                Next
              </Button>
            </div>
            <div className={classes.bottomBarField}>
              {isCollapsed ? (
                <IconButton
                  aria-label="Expand"
                  onClick={() => setIsCollapse(v => !v)}
                  title="Expand"
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="Collapse"
                  onClick={() => setIsCollapse(v => !v)}
                  title="Collapse"
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              )}
              <IconButton
                aria-label="More"
                className={classes.moreBtn}
                onClick={() => {}}
                title="More"
              >
                <div className={classes.morePopup}>
                  <IconButton
                    aria-label="Gallery"
                    onClick={() => {}}
                    title="Gallery"
                  >
                    <CropOriginalIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Publish"
                    onClick={() => {}}
                    title="Publish"
                  >
                    <PublishIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Save as"
                    onClick={() => {}}
                    title="Save as"
                  >
                    <SaveIcon />
                  </IconButton>
                </div>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bottombar;
