import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import { selectedToDo } from "../../../redux/selectors/selectors";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserNote,
  updateUserNote,
} from "../../../redux/actions/todo-actions";

const NotesBox = () => {
  const classes = useStyles();
  const [expandMoreClick, setExpandMoreClick] = useState(false);
  const { userNote } = useSelector(selectedToDo);
  const [note, setNote] = useState("");
  const { userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserNote());
  }, []);

  useEffect(() => {
    setNote(userNote.value)
  }, [userNote]);

  const onNoteChange = (e) => {
    console.log(note);
    setNote(e.target.value)
  }

  const onUserStopInputNote = () => {
    updateUserNote(userNote?.key, {value: note, userId });
  }

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
        value={note}
        multiline
        fullWidth
        rows={expandMoreClick ? 18 : 5}
        onChange={onNoteChange}
        onBlur={onUserStopInputNote}
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
