import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  container: {
    width: "500px",
    height: "250px",
    padding: "25px",
    background: "#FFFFFF",
    border: "5px solid #43D4DD",
    borderRadius: "25px",
    position: "relative",
    top: "230px",
    left: "29px",
    [theme.breakpoints.only("xs")]: {
      width: "95%",
      height: "auto",
      top: 0,
      left: 0,
      padding: "10px",
      paddingBottom: "20px",
    },
    [theme.breakpoints.up("md")]: {
      left: "100px",
    },
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  homeLogo: {
    background: "#FBDD3F",
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    marginRight: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "35px",
      height: "35px",
    },
    [theme.breakpoints.only("xs")]: {
      marginRight: "10px",
    },
  },
  textContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: "24px",
    color: "#364954",
    marginBottom: "4px",
  },
  selectedText: {
    color: "#d40073",
    fontWeight: "700",
  },
  primaryButton: {
    width: "150px",
    height: "40px",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#FFFFFF",
    background: "#43D4DD",
    borderRadius: "25px",
    position: "absolute",
    bottom: "-20px",
    right: "80px",
    [theme.breakpoints.down("xs")]: {
      right: "50%",
      transform: "translate(50%)",
    },
  },
}));
