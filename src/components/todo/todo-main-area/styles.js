import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  addButtonRoot: {
    width: "100%",
    height: "100px",
    borderRadius: "25px",
    border: "5px solid rgba(240, 238, 238, 0.5)",
    fontSize: "75px",
    fontWeight: "700",
    lineHeight: "75px",
  },
  addButtonOutlined: {
    color: "rgba(196, 196, 196, 0.49)",
  },
  toDoBlock: {
    display: "inline-block",
    width: "100%",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      width: "96%",
      margin: "0 2% 30px 2%",
    },
  },
  toDoContainer: {
    columns: "2 auto",
    columnGap: "30px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      columns: "1 auto",
    },
  },
}));
