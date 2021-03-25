import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";

const TimerButton = ({ color, onClick, text, ...rest }) => {
  const classes = useStyles({ color });
  return (
    <Button
      {...rest}
      variant="text"
      onClick={onClick}
      classes={{ root: classes.timerButton }}
    >
      {text}
    </Button>
  );
};

export default TimerButton;
