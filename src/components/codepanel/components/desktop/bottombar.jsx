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
import leftArrow from "../../../../assets/images/grey-left-Arrow.png"
import rightArrow from "../../../../assets/images/grey-right-Arrow.png"
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
    border: '3px solid #eaeaeb',
    borderRadius: '10px'
  }
}));

const Bottombar = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapse] = useState(false);
  return (
    <div className={classes.bottomBar}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.bottomBarWrapper}>
      
            <Grid item xs>
              <Button
                className={classes.pagination}
                onClick={() => dispatch(codepanelDecSlideNumber())}
                variant="outlined"
                style={{marginLeft:'-14px'}}
              >
               <div style={{paddingRight: 7}}><img src={rightArrow}  width={20} /></div> {" "}Back  
              </Button>
            </Grid>
            <Grid item xs>
              <Button disabled={props.skipSlide == true}
                className={classes.pagination}
                onClick={() => dispatch(codepanelIncSlideNumber())}
                variant="outlined"
              >
                Next {" "}<div style={{paddingLeft: 7}}><img src={leftArrow} width={20} /></div>
              </Button>
            </Grid>
            <Grid item xs style={{textAlign:'end'}}>
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
            {/* <Grid  tem xs={12} sm={4} className={classes.bottomBarField}>
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
            </Grid> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bottombar;
