import React, { useContext, useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import {
  Person as AccountIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";
import {
  GridSvg,
  AccountSvg,
  ChatSvg,
  MenuSvg,
} from "../../shared/svgs/menu-items";
// styles
import useStyles from "./styles";

// components
import Typography from "@material-ui/core/Typography";
import { toggleSideBar } from "../../redux/actions/side-actions";
import { useDispatch, useSelector } from "react-redux";
import {Link, useLocation} from "react-router-dom";
import { AuthContext } from '../../shared/contexts/authContext';
import { removeCookies } from "../../shared/lib/authentication";
import routes from "../../routes";
import { isCurrentUser, setUserId } from "../../redux/actions/user-actions";
import * as actions from "../../redux/actions/chat-action";

export default function Header() {
  const location = useLocation();
  const classes = useStyles();
  const [profileMenu, setProfileMenu] = useState(null);
  const {isSidebarOpened} = useSelector(state => state.sidebar);
  const {user, userId} = useSelector(state => state.user);
  const { setUser, setTokens } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [idFromUrl, setIdFromUrl] = useState('');
  const [isLayoutRender,setIsLayoutRender] = useState(false);
  const shouldLayoutRender = (pathname)=>{
    if(pathname === routes.LOGIN || pathname === routes.NEW_ACCOUNT || pathname.includes('/join') )
      return false;
    return true;
  }

  useEffect(() => {
    dispatch(setUserId());
  }, [dispatch]);

  useEffect(() => {
    const arr = location.pathname.split('/');
    setIdFromUrl(arr[arr.length - 1]);
    dispatch(isCurrentUser(userId, idFromUrl));
    setIsLayoutRender(shouldLayoutRender(location.pathname));
  }, [location, idFromUrl, dispatch, userId ]);

  const toggleMenuItem = () => {
    dispatch(toggleSideBar());
  };

  const logOut = () => {
    setUser();
    setTokens();
    removeCookies();
  };

  const handleClickShowChat = () => {
    dispatch(actions.showChat());
  }

  return (
    (isLayoutRender && <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleMenuItem()}
          className="headermenubutton"
        >
          {isSidebarOpened ? (
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse
                ),
              }}
            />
          ) : (
            <MenuSvg
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className="headerlogotext">
          {location.pathname === "/tribe" ? "Tribes" : ""}
        </Typography>
        <div className={classes.grow} />
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className="header-chat"
          onClick={handleClickShowChat}
        >
          <ChatSvg classes={{ root: classes.headerIcon }} />
        </IconButton>
        {/* <IconButton
          aria-haspopup="true"
          color="inherit"
          className="header-grid"
        >
          <GridSvg classes={{ root: classes.headerIcon }} />
        </IconButton> */}
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className="header-accont"
          aria-controls="profile-menu"
          onClick={(e) => setProfileMenu(e.currentTarget)}
        >
          <AccountSvg classes={{ root: classes.headerIcon }} />
        </IconButton>

        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              {user && user.firstname ? user.firstname : ""}
            </Typography>
          </div>
          <Link
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
            to={`${routes.PROFILE}/${userId}`}
          >
            <MenuItem>
              <AccountIcon className={classes.profileMenuIcon} /> Profile
            </MenuItem>
          </Link>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Tasks
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Messages
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              onClick={() => logOut()}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>)
  );
}
