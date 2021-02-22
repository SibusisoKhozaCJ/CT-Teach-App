import React, { useEffect, useContext } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { saveUser } from '../../../../redux/actions/user-actions';
import { removeCookies } from "../../../../shared/lib/authentication";
import { AuthContext } from '../../../../shared/contexts/authContext';

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
        {userId ? (
          <div>
            <MenuItem onClick={() => {}}>
              <Typography className={classes.name}>
                Hello, {name ? name : 'Joe'}
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <ExploreOutlinedIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  What’s poppin’ ?<span>PROJECTS PAGE</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => history.push(`/profile/${userId}`)}>
              <ListItemIcon>
                <EmojiPeopleIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  Me, me, me
                  <span>Profile</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <CardMembershipIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  To get framed
                  <span>Certificates</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <PhotoLibraryOutlinedIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  Fun Stuff
                  <span>Gallery</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <SettingsOutlinedIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  Stuff, stuff
                  <span>Settings</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <MonetizationOnOutlinedIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  Money, money
                  <span>Billing</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              onClick={logout}
            >
              <ListItemIcon>
                <ExitToAppIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  Get me out of here
                  <span>Log out</span>
                </Typography>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <ListItemIcon>
                <FavoriteBorderOutlinedIcon className={classes.icon} />
                <Typography className={classes.itemText}>
                  Need a hug?
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
