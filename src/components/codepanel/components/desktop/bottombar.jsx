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
import rightArrow from "../../../../assets/images/chevron-right-icon.png"
import Grid from '@material-ui/core/Grid';

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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width:'100%',
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
  },
  pagination:{
    width:'100%',
    marginLeft:'10px'
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
            {/* <div className={classes.bottomBarField}>
              <Typography style={{ color: "#000" }}>
                Lesson Breadcrumbs
              </Typography>
            </div> */}
            <Grid tem xs={12} sm={8} className={classes.bottomBarField} style={{justifyContent:'flex-start', marginLeft:'-10px'}}>
              <Button
                className={classes.pagination}
                onClick={() => dispatch(codepanelDecSlideNumber())}
                variant="outlined"
              >
                <KeyboardArrowLeftIcon />Back  
              </Button>
              <Button
                className={classes.pagination}
                onClick={() => dispatch(codepanelIncSlideNumber())}
                variant="outlined"
              >
                Next  <KeyboardArrowRightIcon />
              </Button>
            </Grid>
            <Grid  tem xs={12} sm={4} className={classes.bottomBarField}>
              {isCollapsed ? (
                <IconButton
                  aria-label="Expand"
                  onClick={() => setIsCollapse(v => !v)}
                  title="Expand"
                >
                  {/* <KeyboardArrowLeftIcon /> */}
                </IconButton>
              ) : (
                <IconButton
                  aria-label="Collapse"
                  onClick={() => setIsCollapse(v => !v)}
                  title="Collapse"
                >
                  {/* <KeyboardArrowRightIcon /> */}
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
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bottombar;
