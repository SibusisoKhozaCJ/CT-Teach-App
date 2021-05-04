import React, { useEffect, useContext } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import RefreshIcon from '@material-ui/icons/Refresh';

import { saveUser } from '../../../../redux/actions/user-actions';
import { removeCookies } from "../../../../shared/lib/authentication";
import { AuthContext } from '../../../../shared/contexts/authContext';
import {
  codepanelSetProjectsIsActive,
  codepanelSetLeaveNext,
  codepanelSetLeaveIsActive,
  codepanelSetResetIsActive
} from "../../../../redux/actions/codepanel-actions";

import ProjectsIcon from "../../../../assets/images/rocket-icon.png";
import DashboardIcon from "../../../../assets/images/home.svg";
import ProfileIcon from "../../../../assets/images/profile.svg";
import GalleryIcon from "../../../../assets/images/gallery-icon.png";
import LogoutIcon from "../../../../assets/images/logout-icon.png";
import HugIcon from "../../../../assets/images/hug-icon.png";
import FriendsIcon from "../../../../assets/images/friends-icon.png";


const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  modalClose: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  paper: {
    position: 'relative',
    backgroundColor: '#fff',
    border: '2px solid #000',
    padding: '25px 17px',
  },
  name: {
    fontSize: 29,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: '#FBDD3F',
    },
  },
  icon: {
    marginTop: 6,
    width: 32,
    height: 32,
  },
  itemText: {
    color: '#D40073',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& span': {
      color: '#364954',
      textTransform: 'uppercase',
      display: 'block',
      fontSize: 11,
    },
  },
}));

const MainMenu = ({ anchorEl, open, closeHandler }) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, user } = useSelector(state => state.user)
  const { setUser, setTokens } = useContext(AuthContext);
  let name = "Joe"

  if ( user ) {
    name = user.firstname
  }

  const logout = () => {
    setUser();
    setTokens();
    removeCookies();
  };

  useEffect(() => {
    dispatch(saveUser(userId))
  }, [dispatch, userId])

  const leaveHandler = (to) => {
    dispatch(codepanelSetLeaveNext(to));
    dispatch(codepanelSetLeaveIsActive(true));
    closeHandler();
  }

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        className={classes.menu}
        keepMounted
        onClick={() => {}}
        open={open}
      >
        <MenuItem onClick={closeHandler}>
          <IconButton
            aria-label="close"
            onClick={() => {}}
            style={{ marginLeft: 'auto' }}
            title="close"
          >
            <CloseIcon />
          </IconButton>
        </MenuItem>

        {(userId  && !userId.includes('CDTB'))? (
          <div>
            <MenuItem onClick={() => {}}>
              <Typography className={classes.name}>
                Hello, {name ? name : 'Joe'}
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {
              closeHandler();
              dispatch(codepanelSetProjectsIsActive(true));
              }}>
              <ListItemIcon>
                {/* <ExploreOutlinedIcon className={classes.icon} /> */}
                <img width="26" height="29" src={ProjectsIcon} className="coverage" alt="" />
                <Typography className={classes.itemText}>
                  What’s poppin’ ?<span>PROJECTS PAGE</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => leaveHandler("/home")}>
              <ListItemIcon>
                <img width="30" height="30" src={DashboardIcon} className="coverage" alt="" />
                <Typography className={classes.itemText}>
                  Overview
                  <span>Home</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {
                closeHandler();
                dispatch(codepanelSetResetIsActive(true))
              }}>
              <ListItemIcon>
                {/* <img width="30" height="30" src={DashboardIcon} className="coverage" alt="" /> */}
                <RefreshIcon width="32" />
                <Typography className={classes.itemText}>
                  Reset
                  <span>reset current lesson</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => leaveHandler(`/profile/${userId}`)}>
              <ListItemIcon>
                <img width="28" height="28" src={ProfileIcon} className="coverage" alt="" />
                <Typography className={classes.itemText}>
                  Me, me, me
                  <span>Profile</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                {/* <PhotoLibraryOutlinedIcon className={classes.icon} /> */}
                <img width="31" height="32" src={GalleryIcon} className="coverage" alt="" />
                <Typography className={classes.itemText}>
                  Fun Stuff
                  <span>Gallery</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              onClick={logout}
            >
              <ListItemIcon>
                <img width="29" height="29" src={LogoutIcon} className="coverage" alt="" />
                <Typography className={classes.itemText}>
                  Get me out of here
                  <span>Log out</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <img width="32" height="32" src={HugIcon} className="coverage" alt="" />
                <Typography className={classes.itemText}>
                  Need a hug?
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <img width="30" height="30" src={FriendsIcon} className="coverage" alt="" />
                <Typography className={classes.itemText}>
                  Invite Friends
                </Typography>
              </ListItemIcon>
            </MenuItem>
          </div>
        ) : (
          <div>

            <MenuItem
              onClick={() => history.push("/new-account")}
            >
              <ListItemIcon>
                <ChildCareIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  I’m brand new
                  <span>register</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              onClick={() => history.push("/login")}
            >
              <ListItemIcon>
                <EmojiPeopleIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  I’ve been here before
                  <span>login</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <GroupAddOutlinedIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  Invite Friends
                </Typography>
              </ListItemIcon>
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
};

export default MainMenu;
