import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#000000",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#364954",
  },
  logoWidth: {
    width: "55px",
    margin: "0 10px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  greatingBoxWidth: {
    width: "calc(100% - 75px)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: "10%",
    },
  },
}));
