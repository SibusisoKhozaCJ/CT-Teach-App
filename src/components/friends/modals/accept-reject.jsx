import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
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

const AddRemoveFriendModal = ({ openModal, handleModalClose, handleSendRequest, handledeleteFriend }) => {
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
  const handleUnFriendPerson = async () => {
      handledeleteFriend();
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
            <section className="add-remove">
              <div className="add-remove_main">
                <Box my={2} className="add-remove_title">
                  <h1>ARE YOU SURE YOU WANT TO REJECT THIS PERSON?</h1>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} className="accept-remove-container">
                     <Button
                    className="frnd-yesBtn"
                    variant="contained"
                    color="primary"     
                    onClick={() => {handleUnFriendPerson(); handleModalClose()}}              
                  >
                    <label>YES</label>
                  </Button>
                      <Button
                        className="not-nowBtn"
                    variant="contained"
                    color="primary"     
                    onClick={handleModalClose}              
                  >
                    <span>NOT NOW</span>
                  </Button>
                  </Grid>
                </Grid>
              </div>
            </section>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddRemoveFriendModal;