import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "400px",
    height: "280px",
    padding: "25px",
    background: "#FFFFFF",
    border: "5px solid #43D4DD",
    borderRadius: "25px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& input[name='description']": {
      marginBottom: "16px",
    },
    "& input": {
      padding: "0",
    },
    [theme.breakpoints.down(440)]: {
      width: "93%",
      margin: "0",
    },
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  color: {
    width: "50px",
    height: "30px",
    borderRadius: "5px",
    background: (props) => `${props.color}` || "#000000",
  },
  popover: {
    position: "absolute",
    zIndex: "2",
  },
  cover: {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  },
  switch: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  text: {
    color: "#A6A6A6",
    marginRight: "10px",
  },
  colorPicker: {
    width: "80%",
  },
  error: {
    marginTop: 0,
    height: "19px",
  },
}));
