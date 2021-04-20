import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import InputBase from "@material-ui/core/InputBase";
import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
import CloseButton from "../../../shared/components/buttons/CloseButton";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { ChromePicker } from "react-color";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const initialState = {
  name: "",
  description: "",
  color: "",
};

const ToDoAddModal = ({ open, onClose, onSubmit }) => {
  const [todo, setTodo] = useState(initialState);
  const [error, setError] = useState(false);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const classes = useStyles({ color: todo.color, error });

  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo((state) => ({ ...state, [name]: value }));
  };

  const onModalClose = () => {
    onClose();
    setError(false);
    setTodo(initialState);
    setDisplayColorPicker(false);
  };

  const handleColorPickerClick = () => {
    setDisplayColorPicker((state) => !state);
  };

  const handleColorPickerClose = (e) => {
    setDisplayColorPicker(false);
    if (e.currentTarget.classList.contains("MuiIconButton-root")) {
      setTodo((state) => ({ ...state, color: "" }));
    }
  };

  const handleColorPickerChange = (color) => {
    setTodo((state) => ({ ...state, color: color.hex }));
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
            <Grid item style={{marginTop:'15px'}}>
              <Grid container direction="column">
                <FormControl error={error}>
                  <TextField
                    placeholder="Enter Name"
                    name="name"
                    value={todo.name}
                    onChange={onChange}
                    variant="outlined"
                    size="small"
                    classes={{ root: classes.nameField }}
                  />
                  <div className={classes.error}>
                    {error && (
                      <FormHelperText>This field is required.</FormHelperText>
                    )}
                  </div>
                </FormControl>
                <TextField
                  placeholder="Enter Description"
                  name="description"
                  variant="outlined"
                  value={todo.description}
                  onChange={onChange}
                  multiline
                  size="small"
                  classes={{ root: classes.descriptionField }}
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <div className={classes.switch} onClick={handleColorPickerClick}>
                <Typography variant="body1" className={classes.text}>
                  Pick a color
                </Typography>
                <div className={classes.color} />
              </div>
              {displayColorPicker ? (
                <div className={classes.popover}>
                  <ChromePicker
                    disableAlpha={true}
                    color={todo.color}
                    onChange={handleColorPickerChange}
                    className={classes.colorPicker}
                    width="250px"
                  />
                  <Button variant="outlined" onClick={handleColorPickerClose} classes={{root: classes.doneButton}}>
                    Done
                  </Button>
                  <CloseButton className={classes.closePickerButton} onClick={handleColorPickerClose} />
                </div>
              ) : null}
            </Grid>
          </Grid>
          <CloseButton className={classes.closeButton} onClick={onModalClose} />
          <Button
            variant="contained"
            onClick={() => {
              if (!todo.name) {
                setError(true);
              } else {
                onSubmit(todo);
                setTodo(initialState);
                setError(false);
              }
            }}
            style={{borderRadius:'12px', backgroundColor:'#43D4DD', color:'#fff'}}
          >
            Add ToDo
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ToDoAddModal;
