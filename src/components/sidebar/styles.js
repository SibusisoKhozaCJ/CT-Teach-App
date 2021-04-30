import { makeStyles } from "@material-ui/styles";

const drawerWidth = 250;

export default makeStyles(theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 10,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  /* sidebarList: {
    marginTop: theme.spacing(6),
  }, */
  mobileBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: 18,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(0.625),
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  tagSide : {
    display: "flex",
    flexDirection :"column",
    // whiteSpace: "normal"
  },
  tagBottomSide: {
    fontSize: 16
/*line-height: 41px;
text-align: center;
color: rgba(255, 255, 255, 0.75);
text-transform: none;
font-family: "Righteous", sans-serif;*/
},
largeIcon: {
  width: 60,
  height: 60,
},
arrowRight:{
  width: '26px !important',
  marginLeft: 6,
  marginTop: 6,
  [theme.breakpoints.down('sm')]: {
    width: '21px !important',
  }

}
}));
