import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
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
  codepanelDecFontsize
} from '../../../../redux/actions/codepanel-actions'

const useStyles = makeStyles((theme) => ({
  mobileBottomBar: {
    "&.MuiAppBar-colorPrimary": {
      position: "fixed",
      bottom: 0,
      color: theme.palette.secondary.contrastText,
      top: "auto"
    },
    '& .MuiToolbar-regular': {
      minHeight: 50
    }
  },
  mobieleBottomBarWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100vw"
  }
}));

const Bottombar = () => {
  const classes = useStyles();
  const index = useSelector(state => state.codepanel.tab);
  const editor = useSelector(state => state.codepanel.editor);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const insertCharacter = (character) => {
    const doc = editor.getDoc();
    const cursor = doc.getCursor();
    doc.replaceRange(character, cursor);
    editor.focus();
  };

  const handleClick = char => {
    insertCharacter(char);
  };

  return (
    <AppBar className={classes.mobileBottomBar}>
      <Toolbar className={classes.mobieleBottomBarWrapper}>
        {index === 0 && (
          <>
            <Typography>Lesson Breadcrumbs</Typography>
            <IconButton
              aria-label="Full Screen"
              onClick={() => {}}
              title="Full Screen"
            >
              <FullscreenIcon />
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
    </AppBar>
  );
};

export default Bottombar;
