import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { HomeSVG } from "../../../shared/svgs/menu-items";
import CloseButton from "../../../shared/components/buttons/CloseButton";
import Button from '@material-ui/core/Button'
import { useSelector } from "react-redux";
import { userHasEntered } from "../../../redux/actions/todo-actions";

const ToDoTip = () => {
  const classes = useStyles();
  const { hasEntered } = useSelector(state => state.user.user);
  const  [open, setOpen] = useState(!hasEntered);
  const onButtonClick = () => {
    setOpen(false);
    userHasEntered();
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.container}>
          <Grid container>
            <div className={classes.homeLogo}>
              <HomeSVG />
            </div>
            <Grid
              container
              direction="column"
              classes={{ root: classes.textContainer }}
            >
              <Typography variant="body1" classes={{root: classes.textStyle}}>
                {`Hey there ${String.fromCodePoint(128075)}`}
              </Typography>
              <Typography variant="body1" classes={{root: classes.textStyle}}>
                This is <span className={classes.selectedText}>where you can just chill</span> and be happy.
              </Typography>
              <Typography variant="body1" classes={{root: classes.textStyle}}>
                Mark some cards as complete or create your own.
              </Typography>
            </Grid>
            
          </Grid>
          <CloseButton className={classes.closeButton} onClick={onButtonClick}/>
          <Button
            variant="contained"
            color="primary"
            classes={{root: classes.primaryButton}}
            onClick={onButtonClick}
          >
            Got It
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ToDoTip;
