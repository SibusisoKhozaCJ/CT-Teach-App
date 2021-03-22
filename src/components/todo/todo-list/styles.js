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
  },
  ToDoTitleText: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#FFFFFF",
  },
  ToDoContentText: {
    fontSize: "24px",
    fontWeight: "400",
    color: "#FFFFFF",
  },
  ToDoGridHeight: {
    width: "100%",
    display: "inline-block",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      width: "96%",
      margin: "0 2% 30px 2%",
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
    "&:hover": {
      color: "#FFFFFF",
      textDecoration: "underline",
    },
  },
}));
