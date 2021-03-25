import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#364954",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
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
    marginBottom: "25px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: "calc(8% + 33px)",
    },
  },
}));
