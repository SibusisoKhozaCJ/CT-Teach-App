import React from "react";
import HeaderToDo from "../todo/header-todo/header-todo";
import ToDoMainArea from "../todo/todo-main-area/todo-main-area";
import Grid from "@material-ui/core/Grid";
import NotesBox from "../todo/notes-box/notes-box";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { selectedToDo } from "../../redux/selectors/selectors";
import Loading from "../../shared/components/loader/Loading";
import ToDoTip from "./todo-tip/todo-tip";

const ToDo = () => {
  const classes = useStyles();
  const { isFetchingToDo, isFetchingNote } = useSelector(selectedToDo);
  if (isFetchingNote || isFetchingToDo) {
    return (
      <Loading/>
    )
  }
  return (
    <Grid container spacing={1} direction="column" style={{ minHeight: "80%" }}>
      <HeaderToDo />
      <Grid container>
        <Grid
          xs={12}
          sm={12}
          md={8}
          lg={9}
          xl={9}
          item
          className={classes.mainArea}
        >
          <ToDoMainArea />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          lg={3}
          xl={3}
          item
          className={classes.notesBox}
        >
          <NotesBox />
        </Grid>
      </Grid>
      <ToDoTip/>
    </Grid>
  );
};

export default ToDo;
