import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import InputBase from "@material-ui/core/InputBase";
import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import { useStyles } from "./styles";
import CloseButton from "../../../shared/components/buttons/CloseButton";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const initialState = {
  name: "",
  description: "",
  color: "",
};

const ToDoAddModal = ({ open, onClose, onSubmit }) => {


  const [todo, setTodo] = useState(initialState);
  const [error, setError] = useState(false);

  const classes = useStyles({color: todo.color});

  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo((state) => ({ ...state, [name]: value }));
  };

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
        <div className={classes.container}>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="column">
                <FormControl error={error}>
                  <InputBase
                    placeholder="Enter Name ..."
                    name="name"
                    value={todo.name}
                    onChange={onChange}
                  />
                  {error && <FormHelperText>This are required</FormHelperText>}
                </FormControl>
                <InputBase
                  placeholder="Enter Description ..."
                  name="description"
                  value={todo.description}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <InputLabel
                htmlFor="color-picker"
                classes={{ root: classes.colorLabel }}
              >
                Pick a color:
              </InputLabel>
              <InputBase
                id="color-picker"
                type="color"
                classes={{ root: classes.colorInput }}
                name="color"
                value={todo.color}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <CloseButton className={classes.closeButton} onClick={onClose} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              if (!todo.name) {
                setError(true);
              } else {
                onSubmit(todo);
                setTodo(initialState);
                setError(false);
              }
            }}
          >
            Add ToDo
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ToDoAddModal;
