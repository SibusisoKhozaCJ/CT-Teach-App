import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import ToDoList from "../todo-list/todo-list";
import { useSelector, useDispatch } from "react-redux";
import { selectedToDo } from "../../../redux/selectors/selectors";
import { deleteTodo, getTodoList, setTodo } from "../../../redux/actions/todo-actions";
import ToDoAddModal from "../todo-add-modal/todo-add-modal";

const ToDoMainArea = () => {
  const classes = useStyles();
  const { userToDoList, isFetchingToDo, isFetchingNote } = useSelector(selectedToDo);
  const {userId} = useSelector( state => state.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("mount");
    dispatch(getTodoList())
  }, [])
  
  const onDoneButtonClick = (key) => {
    dispatch(deleteTodo(key))
  }
  
  const onToDoAddButtonClick = () => {
    setOpen(true);
  }
  
  const onModalClose = () => {
    setOpen(false);
  }

  const onSubmitToDo = (todo) => {
    const isLink = /(https?:\/\/)?[\w\-~]+([\.\:][\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w\-]*)?(\?[^\s]*)?/gi;
    setOpen(false);
    setTodo({
      color: todo.color || "#43D4DD",
      content: todo.description,
      title: todo.name,
      contentType: isLink.test(todo.description) ? "link" : "text",
      done: false,
      userId: userId,
    })
  }

  return (
    <div className={classes.toDoContainer}>
      <Grid item classes={{root: classes.toDoBlock}}>
        <Button
          classes={{ root: classes.addButtonRoot, outlined: classes.addButtonOutlined }}
          variant="outlined"
          onClick={onToDoAddButtonClick}
        >
          +
        </Button>
      </Grid>
      {userToDoList.map((todo, i) => (
        <ToDoList todo={todo} key={i} onDoneButtonClick={onDoneButtonClick}/>
      ))}
      <ToDoAddModal open={open} onClose={onModalClose} onSubmit={onSubmitToDo} />
    </div>
  );
};

export default ToDoMainArea;
