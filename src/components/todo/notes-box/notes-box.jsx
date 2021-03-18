import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";

const NotesBox = () => {
  const classes = useStyles();
  const [expandMoreClick, setExpandMoreClick] = useState(false);

  const onExpandButtonClick = () => {
    setExpandMoreClick((state) => !state);
  };

  return (
    <div className={classes.container}>
      <Typography variant="body1">NOTES & PLANNING</Typography>
      <InputBase
        id=""
        label=""
        placeholder="I can write reminders or anything here."
        multiline
        fullWidth
        rows={expandMoreClick ? 18 : 5}
        // onChange={}
      />
      <IconButton
        classes={{ root: classes.iconColor }}
        onClick={onExpandButtonClick}
      >
        {expandMoreClick ? (
          <ExpandLess fontSize="large" />
        ) : (
          <ExpandMoreIcon fontSize="large" />
        )}
      </IconButton>
    </div>
  );
};

export default NotesBox;
