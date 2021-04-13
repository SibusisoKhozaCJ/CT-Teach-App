import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { HomeSVG, YellowArrowIcon, SmileIcon, CodeArrowIcon, BrowserIcon, ToolTipIcon, ChallengeIcon, UserIcon } from "../../../../shared/svgs/menu-items";
import CloseButton from "../../../../shared/components/buttons/CloseButton";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { codepanelSetTourIsActive, codepanelSetTab } from "../../../../redux/actions/codepanel-actions";

const ToolTip = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [step, setStep] = useState(1);

  const [open, setOpen] = useState(true);
  const onButtonClick = () => {
    if (step === 3) {
      dispatch(codepanelSetTab(1));
    } else if (step === 4) {
      dispatch(codepanelSetTab(2));
    }

    if (step === 5) {
      onClose()
    } else { 
      setStep(step + 1)  
    }
  };

  const onClose = () => {
    dispatch(codepanelSetTourIsActive(false));
    dispatch(codepanelSetTab(0));
    setTimeout(() => {
      setStep(1);  
    }, 1000);
  }

  const renderContent = () => {
    if (step === 1) {
      return <div className={classes.container}>
          <Grid container>
            <div className={classes.leftCon}>
              <UserIcon />
              <label className={classes.slideLabel}></label>
              <h5 className={classes.slideCount}>1 of 5</h5>
            </div>
            <Grid
              container
              direction="column"
              classes={{ root: classes.textContainer }}
            >
              <Typography variant="body1" classes={{ root: classes.titleStyle }}>
                <span className={classes.selectedText}>
                  Welcome!
                </span>
              </Typography>
              <Typography variant="body1" classes={{ root: classes.textStyle }}>
                I'm Jonathan, the founder of CodeTribe.
              </Typography>
              <Typography variant="body1" classes={{ root: classes.textStyle }}>
                It's so great to have you here.
              </Typography>
            </Grid>
          </Grid>
          <CloseButton
            className={classes.closeButton}
            onClick={onClose}
          />
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.primaryButton }}
            onClick={onButtonClick}
          >
            Ooo, thanks.
          </Button>
        </div>
    } else if (step === 2) {
      return <div className={classes.container}>
        <span className={classes.arrow}>
          <YellowArrowIcon />
        </span>
          <Grid container>
            <div className={classes.leftCon}>
              <div className={classes.homeLogo}>
                <SmileIcon />
              </div>
              <label className={classes.slideLabel}>SLIDES</label>
              <h5 className={classes.slideCount}>2 of 5</h5>
            </div>
            <Grid
              container
              direction="column"
              classes={{ root: classes.textContainer }}
            >
              <Typography variant="body1" classes={{ root: classes.titleStyle }}>
                Ta-Daa!{" "}
                <span className={classes.selectedText}>
                  Here are the "SLIDES."
                </span>{" "}
              </Typography>
              <ToolTipIcon />
              <Typography variant="body1" classes={{ root: classes.textStyle }}>
                This is where you learn new things and progress through the training.
              </Typography>
            </Grid>
          </Grid>
          <CloseButton
            className={classes.closeButton}
            onClick={onClose}
          />
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.primaryButton }}
            onClick={onButtonClick}
          >
            I SEE
          </Button>
        </div>
    }  else if (step === 3) {
      return <div className={classes.container}>
        <span className={classes.arrow}>
          <YellowArrowIcon />
        </span>
          <Grid container>
            <div className={classes.leftCon}>
              <div className={classes.homeLogo}>
                <SmileIcon />
              </div>
              <label className={classes.slideLabel}>SLIDES</label>
              <h5 className={classes.slideCount}>3 of 5</h5>
            </div>
            <Grid
              container
              direction="column"
              classes={{ root: classes.textContainer }}
            >
              <Typography variant="body1" classes={{ root: classes.titleStyle }}>
                Some of the slides will be...
              </Typography>
              <Typography variant="body1" classes={{ root: classes.titleStyle }}>
                <span className={classes.selectedText}>
                  CHALLENGES
                </span>{" "}
              </Typography>
              <ChallengeIcon />
              <Typography variant="body1" classes={{ root: classes.textStyle }}>
                These tell you what code to type.
              </Typography>
              <Typography variant="body1" classes={{ root: classes.textStyleSmall }}>
                It's super fun and there are lots of tips.
              </Typography>
            </Grid>
          </Grid>
          <CloseButton
            className={classes.closeButton}
            onClick={onClose}
          />
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.primaryButton }}
            onClick={onButtonClick}
          >
            OKAY
          </Button>
        </div>
    }  else if (step === 4) {
      return <div className={classes.container} style={{left: 'calc(50% - 225px)'}}>
        <span className={classes.arrow} style={{left: 'calc(50% - 37px)'}}>
          <YellowArrowIcon />
        </span>
          <Grid container>
            <div className={classes.leftCon}>
              <div className={classes.homeLogo}>
                <CodeArrowIcon />
              </div>
              <label className={classes.slideLabel}>EDITOR</label>
              <h5 className={classes.slideCount}>4 of 5</h5>
            </div>
            <Grid
              container
              direction="column"
              classes={{ root: classes.textContainer }}
            >
              <Typography variant="body1" classes={{ root: classes.titleStyle }}>
                <span className={classes.selectedText}>
                  This is the "Editor"
                </span>{" "}
              </Typography>
              <Typography variant="body1" classes={{ root: classes.textStyle }}>
                Here is where you type all of your code - There coolest place in the world. :)
              </Typography>
            </Grid>
          </Grid>
          <CloseButton
            className={classes.closeButton}
            onClick={onClose}
          />
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.primaryButton }}
            onClick={onButtonClick}
          >
            Hmmm,...
          </Button>
        </div>
    }  else if (step === 5) {
      return <div className={classes.container} style={{left: 'calc(100% - 460px)'}}>
        <span className={classes.arrow} style={{left: 'auto', right: '30px'}}>
          <YellowArrowIcon />
        </span>
          <Grid container>
            <div className={classes.leftCon}>
              <div className={classes.homeLogo}>
                <BrowserIcon />
              </div>
              <label className={classes.slideLabel}>BROWSER</label>
              <h5 className={classes.slideCount}>5 of 5</h5>
            </div>
            <Grid
              container
              direction="column"
              classes={{ root: classes.textContainer }}
            >
              <Typography variant="body1" classes={{ root: classes.titleStyle }}>
                <span className={classes.selectedText}>
                  Aaand,... the "Browser"
                </span>{" "}
              </Typography>
              <Typography variant="body1" classes={{ root: classes.textStyle }}>
                This is like an internet browser & will show what your website looks like (while you're building it.)
              </Typography>
              <Typography variant="body1" classes={{ root: classes.textStyle }}>
                Now it's time to rock'n roll! ;)
              </Typography>
            </Grid>
          </Grid>
          <CloseButton
            className={classes.closeButton}
            onClick={onClose}
          />
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.primaryButton }}
            onClick={onButtonClick}
          >
            OKIE DOKIE
          </Button>
        </div>
    }

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
        {renderContent()}
      </Fade>
    </Modal>
  );
};

export default ToolTip;
