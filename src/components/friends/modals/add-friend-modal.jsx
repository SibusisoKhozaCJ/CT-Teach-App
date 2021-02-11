import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper1: {
      border: "none",
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const AddFriendModal = ({ openModal, handleModalClose, handleSendRequest }) => {
  var theme = useTheme();
  const classes = useStyles(theme);
  const [friendToAddID, setFriendToAddID] = useState("");
  const [addFriendRespone, setAddFriendRespone] = useState({
    status: "",
    message: "",
  });
  const handleAddFriendRequest = async () => {
    if (friendToAddID !== "") {
      handleSendRequest(friendToAddID);
    } else {
      alert("Please enter a valid username/email");
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={() => {
          handleModalClose();
          setAddFriendRespone({ status: "", message: "" });
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper1}>
            <section className="send-code joinTribe">
              <div className="send-code_main">
                <Box my={2} className="send-code_title">
                  <h1>ADD FRIEND</h1>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box my={1}>
                      <TextField
                        fullWidth
                        placeholder="Email address"
                        variant="outlined"
                        value={friendToAddID}
                        onChange={(e) => setFriendToAddID(e.target.value)}
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Box my={2}>
                  {addFriendRespone.message && (
                    <p style={{ color: `${addFriendRespone.status}` }}>
                      {addFriendRespone.message}
                    </p>
                  )}
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleAddFriendRequest}
                  >
                    <p className="reg-happy">SEND FRIEND REQUEST</p>
                  </Button>
                </Box>
              </div>
            </section>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddFriendModal;
