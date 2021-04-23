import React, { useState, useEffect, useRef } from "react";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./styles";
import TimerButton from "./button/timer-button";
import Typography from "@material-ui/core/Typography";
import { CircularProgressWithLabel } from "./progress/circular-progress";
import IconButton from "@material-ui/core/IconButton";
import CloseButton from "../../../../shared/components/buttons/CloseButton";
import TimerIcon from '@material-ui/icons/Timer';

const Timer = ({ mobile, ...props }) => {
  const classes = useStyles({mobile});
  const [minutes, setMinutes] = useState(1);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [pause, setPause] = useState(false);
  const [timerAnchorEl, setTimerAnchorEl] = useState(null);
  const [openTimer, setOpenTimer] = useState(false);
  const [delay, setDelay] = useState(0);
  const [animationsStart, setAnimationsStart] = useState(0);
  const [time, setTime] = useState(0);

  const pauseRef = useRef(false);
  const timerIdRef = useRef(null);
  const timeRef = useRef(0);
  
  useEffect(() => {
    return () => {
      clearInterval(timerIdRef)
    }
  }, [])

  const onStartClick = () => {
    if (minutes >= 1) {
      setStart(true);
      timeRef.current = minutes * 60;
      setTime(minutes);
      setAnimationsStart(performance.now());
      timerIdRef.current = setInterval(() => {
        if (!pauseRef.current) {
          timeRef.current -= 1;
          if (timeRef.current <= 0) {
            clearInterval(timerIdRef);
          } else setTime(Math.ceil(timeRef.current / 60));
        }
      }, 1000);
    }
  };

  const onKeepCodingClick = () => {
    setOpenTimer(false);
    if (start && pause) {
      setAnimationsStart((state) => state + (performance.now() - delay));
      setDelay(performance.now());
    }
  };

  const onCloseClick = () => {
    setOpenTimer(false);
  };

  const onRestartClick = () => {
    setStart(false);
    setFinish(false);
    setPause(false);
  };

  const onPauseClick = () => {
    setPause(true);
    setDelay(performance.now());
    pauseRef.current = true;
  };

  const onResumeClick = () => {
    setPause(false);
    setAnimationsStart((state) => state + (performance.now() - delay));
    pauseRef.current = false;
  };

  const setFinishTimer = () => {
    setFinish(true);
    setOpenTimer(true);
  };

  const timerHandler = (e) => {
    setTimerAnchorEl(e.currentTarget);
    setOpenTimer((state) => !state);
  };

  const onTimeInputChange = (e) => {
    const { value } = e.target;
    if (value > 60) {
      setMinutes(60);
    } else if (value < 0) {
      setMinutes(0);
    } else {
      setMinutes(value);
    }
  };

  return (
    <span>
      <IconButton onClick={timerHandler} classes={{ root: classes.menuButton }} aria-label="Timer">
        {start && !finish ? (
          <CircularProgressWithLabel
            width={mobile ? 24 : 30}
            height={mobile ? 24 : 30}
            min={minutes}
            pause={pause}
            delay={animationsStart}
            setFinish={setFinishTimer}
          />
        ) : (
          <img src={props.ClockIcon} />
          // <TimerIcon className={classes.timerIcon}/>
        )}
      </IconButton>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        anchorEl={timerAnchorEl}
        open={openTimer}
        PaperProps={{
          classes: { root: classes.paper },
        }}
      >
        <Grid
          container
          direction="column"
          classes={{ root: classes.container }}
          alignItems="center"
          justify="space-around"
        >
          {!start && !finish ? (
            <Grid container direction="column" alignItems="center">
              <InputBase
                type="number"
                value={minutes}
                onChange={onTimeInputChange}
                classes={{ root: classes.inputNumber }}
              />
              <Typography variant="body1" classes={{ root: classes.textHint }}>
                Minutes
              </Typography>
            </Grid>
          ) : start && !finish ? (
            <Grid container direction="column" alignItems="center">
              <CircularProgressWithLabel
                width={112}
                height={112}
                min={minutes}
                pause={pause}
                delay={animationsStart}
                open={openTimer}
                time={time}
              />
              <Typography variant="body1" classes={{ root: classes.textHint }}>
                Minutes
              </Typography>
            </Grid>
          ) : (
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="space-between"
            >
              <Typography
                variant="body1"
                classes={{ root: classes.finishText }}
              >
                Great Job! High-five...
              </Typography>
              <img
                src="https://i.giphy.com/l4HogV6533Je2oG40.gif"
                className={classes.gif}
                alt="The timer has ended"
              />
            </Grid>
          )}
          {!start && !finish ? (
            <Grid container justify="space-between">
              <TimerButton
                text="CANCEL"
                color="#C4C4C4"
                onClick={onCloseClick}
              />
              <TimerButton
                text="START"
                color="#43D4DD"
                disabled={minutes < 1}
                onClick={onStartClick}
              />
            </Grid>
          ) : start && !finish ? (
            <Grid container justify="space-between">
              {pause ? (
                <TimerButton
                  text="RESUME"
                  color="#C4C4C4"
                  onClick={onResumeClick}
                />
              ) : (
                <TimerButton
                  text="PAUSE"
                  color="#C4C4C4"
                  onClick={onPauseClick}
                />
              )}
              <TimerButton
                text="KEEP CODING"
                color="#000000"
                onClick={onKeepCodingClick}
              />
            </Grid>
          ) : (
            <Grid container justify="space-between">
              <TimerButton
                text="CLOSE"
                color="#C4C4C4"
                onClick={onCloseClick}
              />
              <TimerButton
                text="RESTART"
                color="#43D4DD"
                onClick={onRestartClick}
              />
            </Grid>
          )}
        </Grid>
        <CloseButton
          className={classes.closeButton}
          onClick={start ? onKeepCodingClick : onCloseClick}
        />
      </Popover>
    </span>
  );
};

export default Timer;
