import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  Person as AccountIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";
import { GridSvg, AccountSvg, ChatSvg, MenuSvg} from '../../shared/svgs/menu-items'
// styles
import useStyles from "./styles";

// components
import Typography from '@material-ui/core/Typography';
import {toggleSideBar} from "../../redux/actions/side-actions"
import { useDispatch, useSelector } from "react-redux";

export default function Header(props) {
  var classes = useStyles();
  var [profileMenu, setProfileMenu] = useState(null);
  const {isSidebarOpened} = useSelector(state => state.sidebar);
  const dispatch = useDispatch();
  const toggleMenuItem = () =>{
    dispatch(toggleSideBar());
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
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
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuSvg
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className="headerlogotext">
              CodeTribe
        </Typography>
        <div className={classes.grow} />
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className="header-chat"     
        >
          <ChatSvg classes={{ root: classes.headerIcon }} />
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className="header-grid"
        >
          <GridSvg classes={{ root: classes.headerIcon }} />
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className="header-accont"
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
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
              John Smith
            </Typography>           
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Tasks
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Messages
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
           
              // onClick={() => signOut(userDispatch, props.history)}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
        
      </Toolbar>
    </AppBar>
  );
}
