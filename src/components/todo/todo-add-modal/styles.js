import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "400px",
    height: "300px",
    padding: "25px",
    background: "#FFFFFF",
    border: "5px solid #43D4DD",
    borderRadius: "25px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& input": {
      marginBottom: "16px",
    },
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  colorLabel: {
    margin: "0 8px 0 0 ",
  },
  colorInput: {
    width: "60px",
    padding: "0",
    "& input": {
      padding: 0,
      margin: 0,
      height: "40px",
    },
  },
});
