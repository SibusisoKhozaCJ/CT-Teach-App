import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "450px",
    minHeight: "320px",
    padding: "35px",
    background: "#FFFFFF",
    border: "5px solid #43D4DD",
    borderRadius: "25px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down(440)]: {
      width: "93%",
      margin: "0",
    },
  },
  closeButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  color: {
    width: "50px",
    height: "30px",
    borderRadius: "5px",
    background: (props) => `${props.color}` || "#000000",
  },
  popover: {
    position: "absolute",
    border:"5px solid #43D4DD",
    borderRadius: "25px",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",
  },
  switch: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "16px",
  },
  text: {
    color: "#A6A6A6",
    marginRight: "10px",
  },
  colorPicker: {
    boxShadow: "none !important",
    borderRadius: "25px 25px 0 0 !important",
    "&>div": {
      borderRadius: "20px 20px 0 0 !important",
    }
  },
  doneButton: {
    width: "80%",
    borderRadius: "25px",
    border: "none",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "28px",
    background: "#c4c4c4",
    color: "#FFFFFF",
    position: 'relative',
    bottom: "10px",
    left: "50%",
    transform: "translate(-50%)",
    "&:hover": {
      background: "#c4c4c4",
    }
  },
  closePickerButton: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    background: "#c4c4c4",
    width: "30px",
    height: "30px",
    color: "#FFFFFF",
    "& svg": {
      stroke: "#FFFFFF",
      strokeWidth: "2",
      fontSize: "24px",
    },
    "&:hover": {
      background: "#c4c4c4",
    }
  },
  error: {
    marginTop: 0,
    height: "19px",
  },
  nameField: {
  },
  descriptionField: {
    marginBottom: "16px",
  },
}));
