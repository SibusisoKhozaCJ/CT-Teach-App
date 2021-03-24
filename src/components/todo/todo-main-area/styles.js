import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  addButtonRoot: {
    width: "100%",
    height: "100px",
    borderRadius: "25px",
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='%23F0EEEE80' stroke-width='10' stroke-dasharray='10%2c 30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: "32px",
  },
  addButtonOutlined: {
    color: "rgba(196, 196, 196, 0.49)",
    border: "none",
  },
  plus: {
    fontSize: "64px",
    fontWeight: "700",
    lineHeight: "64px",
    marginRight: "10px",
  },
  toDoBlock: {
    display: "inline-block",
    width: "100%",
    marginBottom: (props) => (props.todo ? "30px" : "100px"),
    [theme.breakpoints.down("xs")]: {
      width: "84%",
      margin: "0 8% 30px 8%",
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
