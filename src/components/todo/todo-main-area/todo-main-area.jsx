import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import ToDoList from "../todo-list/todo-list";
import { useSelector, useDispatch } from "react-redux";
import { selectedToDo } from "../../../redux/selectors/selectors";
import { deleteTodo, getTodoList, setTodo } from "../../../redux/actions/todo-actions";

const ToDoMainArea = () => {
  const classes = useStyles();
  const { userToDoList } = useSelector(selectedToDo);
  const {userId} = useSelector( state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList())
  }, [])
  
  const onDoneButtonClick = (key) => {
    dispatch(deleteTodo(key))
  }

  return (
    <div style={{ columns: "4 300px", columnGap: "10px" }}>
      <Grid item style={{ display: "inline-block", marginBottom: 10 }}>
        <Button
          classes={{ root: classes.root, outlined: classes.outlined }}
          variant="outlined"
          onClick={() => setTodo(
            {
              title: "Be strong. 2",
              content: "",
              contentType: "text",
              done: false,
              color: "#DA228E",
              userId: userId,
            },
          )}
        >
          +
        </Button>
      </Grid>
      {userToDoList.map((todo, i) => (
        <ToDoList todo={todo} key={i} onDoneButtonClick={onDoneButtonClick}/>
      ))}
    </div>
  );
};

export default ToDoMainArea;
