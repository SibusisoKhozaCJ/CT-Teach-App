import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    position: "relative",
    width: "95%",
    background: "#FFFFFF",
    borderRadius: "25px",
    border: "5px solid rgba(240, 238, 238, 0.5)",
    margin: "0 auto",
    padding: "20px",
  },
  iconColor: {
    position: "absolute",
    bottom: "-30px",
    right: "50px",
    width: "55px",
    height: "55px",
    color: "#D40073",
  },
});
