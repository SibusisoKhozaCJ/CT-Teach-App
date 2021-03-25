import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  ToDoRoot: {
    background: (props) => props.color,
    border: "5px solid rgba(240, 238, 238, 0.5)",
    borderRadius: "25px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  ToDoButtonRoot: {
    width: "172px",
    height: "40px",
    background: "rgba(196, 196, 196, 0.49)",
    borderRadius: "50px",
    border: "none",
    alignSelf: "flex-end",
    "&:hover": {
      background: "rgba(196, 196, 196, 0.8)",
    },
  },
  ToDoButtonOutlined: {
    fontWeight: "700",
    fontSize: "31px",
    color: "#FFFFFF",
    lineHeight: "31px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
      lineHeight: "26px",
    },
  },
  ToDoTitleText: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: "16px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
      lineHeight: "26px",
    },
  },
  ToDoContentText: {
    fontSize: "24px",
    fontWeight: "400",
    color: "#FFFFFF",
    marginBottom: "16px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "17px",
      lineHeight: "17px", 
    },
  },
  ToDoGridHeight: {
    width: "100%",
    display: "inline-block",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      width: "84%",
      margin: "0 8% 30px 8%",
      "&:last-child": {
        marginBottom: "100px",
      },
    },
  },
  ToDoLink: {
    color: "#FFFFFF",
    fontSize: "24px",
    fontWeight: "700",
    textDecoration: "none",
    marginBottom: "16px",
    "&:hover": {
      color: "#FFFFFF",
      textDecoration: "underline",
    },
  },
}));
