import React, { useEffect, useContext } from 'react';
import { Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

// import {
//   codepanelSetProjectsIsActive,
//   codepanelSetLeaveNext,
//   codepanelSetLeaveIsActive,
//   codepanelSetResetIsActive
// } from "../../../redux/actions/codepanel-actions";
import LampIcon from "../../../assets/images/lamp-icon.png";
import HintIcon from "../../../assets/images/hint-icon.png";
import ConfuseIcon from "../../../assets/images/confuse-icon.png";
import CheckerIcon from "../../../assets/images/tick-icon.png";

const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  paper: {
    position: 'relative',
    backgroundColor: '#CFFAFD',
    padding: 0,
  },
  list: {
    margin: 0,
    padding: 0
  },
  item: {
    listStyle: "none",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    backgroundColor: '#CFFAFD',
  },
  title: {
    marginLeft: 20
  },
  icon: {
    width: 20
  },
  menu: {
  },
}));

const MainMenu = ({ anchorEl, open, closeHandler }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  if (!open) {
    return null;
  }

  return (
    <>
      <div className={classes.overlay} onClick={closeHandler}/>
      <Menu
        anchorEl={anchorEl}
        className={classes.menu}
        keepMounted
        onClick={() => {}}
        open={open}
      >
        <ul className={classes.list}>
          <li className={classes.item}>
            <span className={classes.icon}>
              <img src={LampIcon} className="coverage" alt="" />
            </span>
            <span className={classes.title}>
              TIPS
            </span>
          </li>
          <li className={classes.item}>
            <span className={classes.icon}>
              <img src={HintIcon} className="coverage" alt="" />
            </span>
            <span className={classes.title}>
              HINTS
            </span>
          </li>
          <li className={classes.item}>
            <span className={classes.icon}>
              <img src={CheckerIcon} className="coverage" alt="" />
            </span>
            <span className={classes.title}>
              CHECKER
            </span>
          </li>
          <li className={classes.item}>
            <span className={classes.icon}>
              <img src={ConfuseIcon} className="coverage" alt="" />
            </span>
            <span className={classes.title}>
              ARRGGG - I’M STUCK
            </span>
          </li>
        </ul>
      </Menu>
    </>
  );
};

export default MainMenu;
