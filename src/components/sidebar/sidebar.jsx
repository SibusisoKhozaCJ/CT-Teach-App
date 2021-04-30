import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  TribeSVG,
  HomeSVG,
  FriendSVG,
  MissionSvg,
  InviteSvg,
  GallerySvg,
  FeedbackSvg, 
  ProjectsSvg,
  ToCodeSvg,
  ProgressSvg,
  ArrowRightSvg
} from "../../shared/svgs/menu-items";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { useLocation, withRouter } from "react-router-dom";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, toggleSideBar ,openSidebar } from "../../redux/actions/side-actions";
import Button from "@material-ui/core/Button";
import JoinTribeModal from "./modals/join-tribe";
import routes from "../../routes";
import { codepanelSetProjectsIsActive } from "../../redux/actions/codepanel-actions";
import LockIcon from "../../assets/svg/LockIcon"
const sideBarContainer = React.createRef();


let sidebarStructure = [
 {  type: "divider" },
  {
    id: 1,
    label: "Tribes",
    link: "/tribe",
    icon: <TribeSVG />,
  },
  
{ id: 11, label: "Friends", link: "/friends", icon: <FriendSVG />},
 { id: 8, label: "Gallery", link: "/", icon:<LockIcon /> },
 {  type: "divider" },
  { id: 2, label: "Goals", link: "/", icon: <LockIcon /> },
  { id: 12, label: "Progress", link: "/progress", icon: <ProgressSvg /> },
  {  type: "divider" },
 
  

  { id: 6, label: "Invite", link: "/", icon: <LockIcon /> },
  { id: 10, label: "Feedback", link: "/", icon: <LockIcon /> },
];

let protectedSidebarStructure = [
  { id: 0, label: "Home", link: "/home", icon: <HomeSVG /> },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();
  const { isSidebarOpened } = useSelector((state) => state.sidebar);
  var [isPermanent, setPermanent] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [tribeCode, setTribeChange] = useState("");
  const [isLayoutRender,setIsLayoutRender] = useState(false);
  const history = useHistory();
  const shouldLayoutRender = (pathname)=>{
    if (
        pathname === routes.LOGIN ||
        pathname === routes.NEW_ACCOUNT ||
        pathname.includes('/join') ||
        pathname.includes('/codepanel')
      )
      return false;
    return true;  
  }

  let structure;
  let isShowJoinTribeIcon;
  const { isCurrentUser } = useSelector((state) => state.user);
  const isProfileURL = useLocation().pathname.includes('/profile');

  if (!isCurrentUser && isProfileURL) {
    isShowJoinTribeIcon = false;
    structure = protectedSidebarStructure;
  } else {
    isShowJoinTribeIcon = true;
    structure = sidebarStructure;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside =(evt)=>{
    if (sideBarContainer.current && !sideBarContainer.current.contains(evt.target)) {
    dispatch(closeSidebar())
  }
  }

  useEffect(() => {
    setIsLayoutRender(shouldLayoutRender(location.pathname));
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  },[location]);
  const dispatch = useDispatch();
  const toggleMenuItem = () => {
    dispatch(toggleSideBar());
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleJoinLinkChange = () => {
    setChecked(!checked);
  };
  const handleOpen = () => {
    dispatch(openSidebar())
    setOnHover(true)

 }
 const handleClose = () => {
   if(onHover){
   dispatch(closeSidebar())
   setOnHover(false)
   }
   setOnHover(false)
 }
  return (
    (isLayoutRender && <div ref={sideBarContainer} className="sidebar">
      <JoinTribeModal
        tribeCode={tribeCode}
        setTribeChange={setTribeChange}
        checked={checked}
        handleJoinLinkChange={handleJoinLinkChange}
        openModal={openModal}
        handleModalClose={handleModalClose}
      />
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

        <List className={classes.sidebarList} onMouseOver={() => handleOpen()} onMouseLeave={() =>handleClose()}>
          <div className="tocodepupupdiv">
            <Button
              className={isSidebarOpened ? "open" : "close"}
              aria-describedby={id}
              variant="contained"
              color="primary"
              onClick={() => {history.push("/codepanel/C001/P001/T001")}}
            >
             <ArrowRightSvg className={classes.arrowRight} />
              <span className="tocode-tagsidebar">It's GO time</span>
            </Button>
          </div>
          <SidebarLink
            location={location}
            isSidebarOpened={isSidebarOpened}
            id="12"
            link={"/codepanel/C001/P001/T001"}
            label="Projects"
            icon={<ProjectsSvg />}
            callback={() => {dispatch(codepanelSetProjectsIsActive(true))}}
          />
          {/* {isShowJoinTribeIcon && <div className="newpopupdiv"> */}
          {/*   <Button */}
          {/*     className={isSidebarOpened ? "open" : "close"} */}
          {/*     aria-describedby={id} */}
          {/*     variant="contained" */}
          {/*     color="primary" */}
          {/*     onClick={handleClick} */}
          {/*   > */}
          {/*     <span className="new-tagsidebar">New</span> */}
          {/*     <NewSVG /> */}
          {/*   </Button> */}
          {/*   <Popover */}
          {/*     className="newpopover" */}
          {/*     id={id} */}
          {/*     open={open} */}
          {/*     anchorEl={anchorEl} */}
          {/*     onClose={handleClose} */}
          {/*     anchorOrigin={{ */}
          {/*       vertical: "top", */}
          {/*       horizontal: "left", */}
          {/*     }} */}
          {/*     transformOrigin={{ */}
          {/*       vertical: "top", */}
          {/*       horizontal: "center", */}
          {/*     }} */}
          {/*   > */}
          {/*     <Typography className="poprtext"> */}
          {/*       <button onClick={(evt) => setOpenModal(true)}> */}
          {/*         Join Tribe */}
          {/*       </button> */}
          {/*     </Typography> */}
          {/*   </Popover> */}
          {/* </div>} */}
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
    </div>)
  );

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;
    if (isSmallScreen && isPermanent) {
     return setPermanent(false);
    } 
     if (!isSmallScreen && isPermanent) {
     return setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
