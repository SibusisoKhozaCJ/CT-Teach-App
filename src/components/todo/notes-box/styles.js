import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "calc(100%-48px)",
    background: "#FFFFFF",
    borderRadius: "25px",
    border: "5px solid rgba(240, 238, 238, 0.5)",
    marginLeft: "30px",
    marginBottom: "25px",
    padding: "20px 20px 30px 20px",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 30px)",
    },
    [theme.breakpoints.only('sm')]: {
      width: "100%",
      margin: "0",
    },
    [theme.breakpoints.down('xs')]: {
      width: "84%",
      margin: "0 8%",
    }
  },
  iconColor: {
    position: "absolute",
    bottom: "-30px",
    right: "40px",
    width: "55px",
    height: "55px",
    boxSizing: "border-box",
    padding: "0",
    borderRadius: "50%",
    background: "#FFFFFF",
    border: "5px solid rgba(240, 238, 238, 0.5)",
    color: props => props.click ? "#C4C4C4" : "#D40073",
    "& svg": {
      stroke:  props => props.click ? "#C4C4C4" : "#D40073",
      strokeWidth: "1.5",
    },
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
    paddingLeft: "10px",
  },
  noteBoxTextArea: {
    fontSize: "21px",
    color: "#929292",
    background: "rgba(240, 238, 238, 0.5)",
    borderRadius: "5px",
    padding: "10px",
  },
}));
