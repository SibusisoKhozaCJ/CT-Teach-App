import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { HomeSVG } from "../../../shared/svgs/menu-items";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";

const HeaderToDo = (props) => {
  const classes = useStyles();
  const { firstname } = useSelector((state) => state.user.user);
  return (
    <Grid container alignItems="center">
      <Grid item classes={{ root: classes.logoWidth }}>
        <HomeSVG />
      </Grid>
      <Grid
        container
        direction="column"
        classes={{ root: classes.greatingBoxWidth }}
      >
        <Typography classes={{ root: classes.heading }} variant="body1">
          {`Hi ${firstname},`}
        </Typography>
        <Typography classes={{ root: classes.subHeading }} variant="body1">
          What do you want to do today?
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderToDo;
