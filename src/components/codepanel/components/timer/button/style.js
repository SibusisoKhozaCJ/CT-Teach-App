import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  timerButton: {
    width: "130px",
    height: "30px",
    background: (props) => props.color,
    borderRadius: "5px",
    border: "none",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "18px",
    color: "#FFFFFF",
    padding: "0",
    "&:hover": {
      background: (props) => props.color,
    },
    [theme.breakpoints.down(350)]: {
      width: "110px",
    }
  },
}));
