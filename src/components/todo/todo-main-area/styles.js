import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  addButtonRoot: {
    width: "300px",
    height: "100px",
    borderRadius: "25px",
    border: "5px solid rgba(240, 238, 238, 0.5)",
    fontSize: "75px",
    fontWeight: "700",
  },
  addButtonOutlined: {
    color: "rgba(196, 196, 196, 0.49)",
  },
  toDoBlock: {
    display: "inline-block",
    marginBottom: 10,
  },
  toDoContainer: {
    columns: "4 300px",
    columnGap: "10px",
    textAlign: "center",
  },
});
