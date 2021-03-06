import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  notesBox: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
      marginBottom: "32px",
    },
  },
  mainArea: {
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
}));
