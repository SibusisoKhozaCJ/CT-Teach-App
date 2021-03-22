import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "calc(100%-48px)",
    background: "#FFFFFF",
    borderRadius: "25px",
    border: "5px solid rgba(240, 238, 238, 0.5)",
    marginLeft: "30px",
    padding: "20px",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0",
    },
  },
  iconColor: {
    position: "absolute",
    bottom: "-30px",
    right: "50px",
    width: "55px",
    height: "55px",
    boxSizing: "border-box",
    padding: "0",
    borderRadius: "50%",
    background: "#FFFFFF",
    border: "5px solid rgba(240, 238, 238, 0.5)",
    color: "#D40073",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      width: "55px",
      height: "55px",
      borderRadius: "50%",
      background: "#FFFFFF",
      border: "5px solid rgba(240, 238, 238, 0.5)",
    },
  },
  noteBoxHeader: {
    color: "#A6A6A6",
    fontSize: "27px",
    fontWeight: "700",
  },
  noteBoxTextArea: {
    fontSize: "21px",
    color: "#000000",
  },
}));
