import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  TribeSVG,
  ProgressSvg,
  MissionSvg,
  NotificationSvg,
  ShareSvg,
  InviteSvg,
  ProfileSvg,
  GallerySvg,
  SkillsSvg,
  FeedbackSvg,
  NewSVG,
} from "../../shared/svgs/menu-items";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import useStyles from "./styles";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/actions/side-actions";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import JoinTribeModal from "./modals/join-tribe"

const structure = [

  { id: 0, label: "Progress", link: "/", icon: <ProgressSvg /> },
  {
    id: 1,
    label: "Tribes",
    link: "/tribe",
    icon: <TribeSVG />,
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
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();
  const { isSidebarOpened } = useSelector((state) => state.sidebar);
  var [isPermanent, setPermanent] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
 const [openModal,setOpenModal] = useState(false);
 const [checked, setChecked] = useState(false);
 const [tribeCode, setTribeChange ] = useState("")
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleModalClose = () => {
    setOpenModal(false);
};

  const handleJoinLinkChange = () => {
      setChecked(!checked);
  };

  return (
    <div className="sidebar">
      <JoinTribeModal tribeCode={tribeCode} setTribeChange={setTribeChange} checked={checked} handleJoinLinkChange={handleJoinLinkChange} openModal={openModal} handleModalClose={handleModalClose} />
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
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse
                ),
              }}
            />
          </IconButton>
        </div>

        <List className={classes.sidebarList}>
                  <div className="newpopupdiv">

                <Button className={isSidebarOpened ? "open": "close"} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                  <NewSVG/>
                  <span className="new-tagsidebar">New</span>
                </Button>
                <Popover
                className="newpopover"
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography className="poprtext"><button onClick={(evt)=>setOpenModal(true)}>Join Tribe</button></Typography>


                </Popover>

          </div>
          {structure.map((link) => (
            <SidebarLink
              key={link.label + link.id}
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
