import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const ToDoList = ({todo, onDoneButtonClick}) => {
  const classes = useStyles({color: todo.color});
  return (
      <Grid item classes={{root: classes.ToDoGridHeight}}>
          <Paper classes={{ root: classes.ToDoRoot }}>
            <Typography classes={{ root: classes.ToDoTitleText }} variant="h2">
              {todo.title}
            </Typography>
            {todo.contentType === "text" ? (
              <Typography classes={{ root: classes.ToDoContentText }} variant="body1">
                {todo.content}
              </Typography>
            ) : (<a href={todo.content}>Here</a>)}
            <Button
              classes={{
                root: classes.ToDoButtonRoot,
                outlined: classes.ToDoButtonOutlined,
              }}
              variant="outlined"
              color="default"
              onClick={() => onDoneButtonClick(todo.key)}
            >
              DONE
            </Button>
          </Paper>
      </Grid>
  )
};

export default ToDoList;
