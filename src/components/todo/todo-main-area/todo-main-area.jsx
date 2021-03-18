import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button'
import { useStyles } from "./styles";
import ToDoList from "../todo-list/todo-list";

const mockData = [
    {
      title: "Be cool.",
      content: "",
      contentType: "text",
      done: false,
      color: "#DA8E8E"
    },
    {
      title: "Got some friends who like coding?",
      content: "Invite them to your tribe.",
      contentType: "text",
      done: false,
      color: "#1E2CAB",
    },
    {
      title: "Start Project 1",
      content: "Here",
      contentType: "link",
      done: false,
      color: "#46D8B5",
    },
    {
      title: "Share one of your Projects to the Gallery",
      content:
        "You do this by clicking publish in the “Preview” panel when coding.",
      contentType: "text",
      done: false,
      color: "#C5206F",
    },
  ];

const ToDoMainArea = () => {
    const classes = useStyles();
  return (
    
     <div style={{columns: "4 300px", columnGap: "10px", }}>
        <Grid item style={{display: "inline-block", marginBottom: 10,}}>
            <Button
              classes={{ root: classes.root, outlined: classes.outlined }}
              variant="outlined"
            >
              +
            </Button>
        </Grid>
        {mockData.map((todo, i) => <ToDoList todo={todo} key={i}/>)}
     </div>
  );
};

export default ToDoMainArea;
