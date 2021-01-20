import React, { useState, useEffect, useContext } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import { TribeSVG, ProgressSvg, MissionSvg, NotificationSvg, ShareSvg, InviteSvg, ProfileSvg, GallerySvg, SkillsSvg, FeedbackSvg } from '../../shared/svgs/menu-items'
import {
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import useStyles from "./styles";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/actions/side-actions";

const structure = [
  { id: 0, label: "Progress", link: "/", icon: <ProgressSvg /> },
  {
    id: 1,
    label: "Tribes",
    link: "/tribe",
    icon: <TribeSVG />

    ,
  },
  { id: 2, label: "Goals", link: "/", icon: <MissionSvg /> },
  { id: 5, type: "divider" },
  {
    id: 3,
    label: "Notifications",
    link: "/",
    icon: <NotificationSvg />,
  },
  {
    id: 4,
    label: "Share",
    link: "/",
    icon: <ShareSvg />,
  },

  { id: 6, label: "Invite", link: "/", icon: <InviteSvg /> },
  { id: 7, label: "Profile", link: "/", icon: <ProfileSvg /> },
  { id: 8, label: "Gallery", link: "/", icon: <GallerySvg /> },
  { id: 8, label: "Skills", link: "/", icon: <SkillsSvg /> },
  { id: 8, label: "Feedback", link: "/", icon: <FeedbackSvg /> },
  { id: 9, type: "divider" },

];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();
  const { isSidebarOpened } = useSelector(state => state.sidebar);
  var [isPermanent, setPermanent] = useState(true);
  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });
  const dispatch = useDispatch();
  const toggleMenuItem = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="sidebar">
      <Drawer
        variant={isPermanent ? "permanent" : "temporary"}
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: isSidebarOpened,
            [classes.drawerClose]: !isSidebarOpened,
          }),
        }}
        open={isSidebarOpened}
      >
        <div className={classes.toolbar} />
        <div className={classes.mobileBackButton}>
          <IconButton onClick={() => toggleMenuItem()}>
            <ArrowBackIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse),
              }}
            />
          </IconButton>
        </div>
        <List className={classes.sidebarList}>
          {structure.map(link => (
            <SidebarLink
              key={link.id}
              location={location}
              isSidebarOpened={isSidebarOpened}
              {...link}
            />
          ))}
        </List>
      </Drawer>

    </div>
  );


  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
