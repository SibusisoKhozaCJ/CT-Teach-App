import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default makeStyles(theme => ({
  logotype: {
    color: "black",
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 500,
    fontSize: 18,
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  appBar: {
       width: "100vw",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: 25,
    paddingLeft: theme.spacing(2.5),
    width: 36,
    backgroundColor: fade(theme.palette.common.black, 0),
    transition: theme.transitions.create(["background-color", "width"]),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: fade(theme.palette.common.black, 0.08),
    },
  },
  searchFocused: {
    backgroundColor: fade(theme.palette.common.black, 0.08),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
  },
  searchIcon: {
    width: 36,
    right: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: theme.transitions.create("right"),
    "&:hover": {
      cursor: "pointer",
    },
  },
  searchIconOpened: {
    right: theme.spacing(1.25),
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing(1.25),
    width: "100%",
  },
  messageContent: {
    display: "flex",
    flexDirection: "column",
  },
  headerMenu: {
    marginTop: theme.spacing(7),
  },
  headerMenuList: {
    display: "flex",
    flexDirection: "column",
  },
  headerMenuItem: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
      // color: "white",
    },
  },
  headermenubutton: {
    width: 48,
    height: 48,
    left: 20,
  },
/*  headerMenuButton: {
    // left: 20,
    padding: theme.spacing(1),
  },*/
  headerMenuButtonSandwich: {
    marginLeft: 9,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    },
    padding: theme.spacing(0.5),
  },
  headerMenuButtonCollapse: {
    marginRight: theme.spacing(2),
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)",
  },
  headerIconCollapse: {
    color: "#2b2525",
  },
  profileMenu: {
    minWidth: 265,
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  profileMenuItem: {
    color: theme.palette.text.hint,
    "&:hover, &:focus": {
      color: theme.palette.text.hint,
      textDecoration: 'none',
    },
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.hint,
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  messageNotification: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
    },
  },
  messageNotificationSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  messageNotificationBodySide: {
    alignItems: "flex-start",
    marginRight: 0,
  },
  sendMessageButton: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textTransform: "none",
  },
  sendButtonIcon: {
    marginLeft: theme.spacing(2),
  },
  purchaseBtn: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    marginRight: theme.spacing(3)
  },
  customBadge: {
    backgroundColor: "#76dc37",
    color: "white"
  },
  homeIconImg: {
    marginRight:10,
  },
  progressBtn: {
    backgroundColor: "#110f0f",
    borderRadius: 30,
    position: "relative",
    margin: "15 0",
    height: 49,
    width: 215,
    textAlign:"center",
    marginLeft: -25,
    ["@media (max-width:1300px)"]: {
      fontSize: 25,
      width: 123,
      height: 32,
      textAlign: "center"
    }
  },

  progressText:{
    color:"#FFF",
    position: "absolute",
    left:0,
    margin: "15 0",
    width: 215,
    textAlign:"center",
    fontSize: 20,
    top:10,
    fontWeight:600,
    ["@media (max-width:1300px)"]: {
      fontSize: 14,
      width: 130,
      top: 5,
    }
  },
  progressDone: {
    background: "#61d546",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: 0,
    opacity: 0,
    transition: "1s ease 0.3s",
  },
  body1: {
    backgroundColor: "#f4f4f4",
    flexDirection: "column",
    fontFamily: 'Montserrat',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
  },
}));
