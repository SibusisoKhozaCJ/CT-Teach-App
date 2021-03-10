import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import KeyboardTabIcon from "@material-ui/icons/KeyboardTab";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import PublishIcon from "@material-ui/icons/Publish";
import SaveIcon from "@material-ui/icons/Save";

import {
  codepanelIncFontsize,
  codepanelDecFontsize,
} from '../../../../redux/actions/codepanel-actions';
import CodepanelLogoIcon from "../../../../assets/images/codepanel-logo.png";
import SideMenu from "../side-menu";
import { openFullscreen, closeFullscreen } from "../../utils/fullscreen";

const useStyles = makeStyles((theme) => ({
  mobileBottomBar: {
    "&.MuiAppBar-colorPrimary": {
      // position: "static",
      position: "fixed",
      top: "auto",
      bottom: 0,
      color: theme.palette.secondary.contrastText,
      // top: "auto"
    },
    '& .MuiToolbar-regular': {
      minHeight: 50
    }
  },
  mobieleBottomBarWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100vw"
  },
  logo: {
    width: 18,
    marginRight: 12,

    "& img": {
      width: "100%"
    }
  }
}));

const Bottombar = () => {
  const classes = useStyles();
  const index = useSelector(state => state.codepanel.tab);
  const editor = useSelector(state => state.codepanel.editor);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const textareaRef = useSelector(state => state.codepanel.textareaRef);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const dispatch = useDispatch();

  const sideMenuCloseHandler = () => {
    setIsSideMenuOpen(false);
  }

  const insertAtCarret = (element, text) => {
    if (document.selection) {
      console.log('Hello');
      element.focus();
      var sel = document.selection.createRange();
      sel.text = text;
      element.focus();
    } else if (element.selectionStart || element.selectionStart === 0) {
      var startPos = element.selectionStart;
      var endPos = element.selectionEnd;
      var scrollTop = element.scrollTop;
      element.value =
        element.value.substring(0, startPos) +
        text +
        element.value.substring(endPos, element.value.length);
      element.focus();
      element.selectionStart = startPos + text.length;
      element.selectionEnd = startPos + text.length;
      element.scrollTop = scrollTop;
    } else {
      element.value += text;
      element.focus();
    }
  }

  const insertCharacter = (character) => {
    insertAtCarret(textareaRef.current, character);
    const ev = new Event('input', { bubbles: true});
    textareaRef.current.dispatchEvent(ev);
    // const doc = editor.getDoc();
    // const cursor = doc.getCursor();
    // doc.replaceRange(character, cursor);
    // editor.focus();
  };

  const handleClick = char => {
    insertCharacter(char);
  };

  return (
    <AppBar className={classes.mobileBottomBar}>
      <Toolbar className={classes.mobieleBottomBarWrapper}>
        {index === 0 && (
          <>
            <div style={{ display: "flex", alignItems: "center"}}>
              {/* <IconButton className={classes.logo}> */}
              <div className={classes.logo} onClick={() => {setIsSideMenuOpen(true)}}>
                <img src={CodepanelLogoIcon} className="coverage" alt="" />
              </div>
              {/* </IconButton> */}
              <Typography>Lesson Breadcrumbs</Typography>
            </div>
            <IconButton
              aria-label="Full Screen"
              onClick={() => {
                isFullscreen ? closeFullscreen() : openFullscreen();
                setIsFullscreen(!isFullscreen);
              }}
              title="Full Screen"
            >
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </>
        )}
        {index === 1 && (
          <>
            <IconButton
              aria-label="Tab"
              onClick={() => handleClick("\t")}
              title="Tab"
            >
              <KeyboardTabIcon />
            </IconButton>
            <IconButton
              aria-label="Left"
              onClick={() => handleClick("<")}
              title="Left"
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              aria-label="Right"
              onClick={() => handleClick(">")}
              title="Right"
            >
              <KeyboardArrowRightIcon />
            </IconButton>
            <IconButton
              aria-label="Quotes"
              onClick={() => handleClick("/")}
              title="Quotes"
            >
              <Typography>/</Typography>
            </IconButton>
            <IconButton
              aria-label="Quotes"
              onClick={() => handleClick('"')}
              title="Quotes"
            >
              <FormatQuoteIcon />
            </IconButton>
            <IconButton
              aria-label="More"
              onClick={e => {
                setAnchorEl(e.currentTarget);
                setIsMenuOpen(open => !open);
              }}
              title="More"
            >
              <MoreHorizIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              keepMounted
              onClose={() => {}}
              open={isMenuOpen}
            >
              {isMenuOpen && (
                <div>
                  <div style={{ display: "flex" }}>
                    <MenuItem onClick={() => setIsMenuOpen(false)}>
                      <VisibilityOffIcon />
                    </MenuItem>
                    <MenuItem onClick={() => dispatch(codepanelDecFontsize())}>
                      <span style={{ fontSize: "20px" }}>T</span>
                    </MenuItem>
                    <MenuItem onClick={() => dispatch(codepanelIncFontsize())}>
                      <span style={{ fontSize: "30px" }}>T</span>
                    </MenuItem>
                  </div>
                  <div style={{ display: "flex" }}>
                    <MenuItem onClick={() => handleClick("=")}>
                      <span style={{ fontSize: "30px" }}>=</span>
                    </MenuItem>
                    <MenuItem onClick={() => handleClick("''")}>
                      <span style={{ fontSize: "30px" }}> ' </span>
                    </MenuItem>
                    <MenuItem onClick={() => handleClick("{}")}>
                      <span style={{ fontSize: "25px" }}>{"{ }"}</span>
                    </MenuItem>
                  </div>
                </div>
              )}
            </Menu>
          </>
        )}
        {index === 2 && (
          <>
            <IconButton aria-label="Gallery" onClick={() => {}} title="Gallery">
              <CropOriginalIcon />
            </IconButton>
            <IconButton aria-label="Publish" onClick={() => {}} title="Publish">
              <PublishIcon />
            </IconButton>
            <IconButton aria-label="Save as" onClick={() => {}} title="Save as">
              <SaveIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
      {isSideMenuOpen ? (
        <SideMenu closeHandler={sideMenuCloseHandler} />
      ) : null}
    </AppBar>
  );
};

export default Bottombar;
