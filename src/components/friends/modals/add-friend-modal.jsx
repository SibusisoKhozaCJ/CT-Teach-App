import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import  Btnicon from "../../../assets/icons/tribe/sendicon.svg"
import {
  MailiconSVG,
  MailsendIconSVG,
} from "../../../shared/svgs/menu-items";
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
            <section className="send-code joinTribe Addfrnd-request">
              <div className="send-code_main">
                <Box my={2} className="send-code_title">
                  <h1>ADD FRIEND</h1>
                </Box>
                <Grid container spacing={3} className="sentmailReq">
                  <Grid item xs={12}>
                    <Box my={1}>
                      <TextField
                             InputProps={{
                        startAdornment: <MailiconSVG />
                      }}
                        fullWidth
                        placeholder="FRIEND’S EMAIL"
                        variant="outlined"
                        value={friendToAddID}
                        onChange={(e) => setFriendToAddID(e.target.value)}
                     
                      />
                    </Box>
                  </Grid>
                 
                   <Grid item xs={12}>
                    <Box my={1}>
                      <TextField
                             InputProps={{
                        startAdornment: <MailsendIconSVG />
                      }}
                        fullWidth
                        placeholder="USERNAME"
                        variant="outlined"
                        value={friendToAddID}
                        onChange={(e) => setFriendToAddID(e.target.value)}
                     
                      />
                    </Box>
                  
                  </Grid>
                    <label className="errormsg">
                                This is error message
                    </label>
                   <Grid item xs={12}>
                     <label className="addNote">Wanna add a note? </label>
                    <Box my={1}>
                      <TextField
                        fullWidth
                        placeholder="Hey, this is a super fun coding app. Join me."
                        variant="outlined"
                        multiline
                        rows={3}
                      
                      />
                    </Box>
                  </Grid>
                    <Grid container spacing={3} className="reg-checkbox frnd-checkbox">
                      <Grid item xs={12}>
                        <Box my={1}>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="  Search by User Name"
                            labelPlacement="end"
                          />
                        </Box>
                      </Grid>
                    </Grid>
                </Grid>

                <Box my={2} className="add-frndReq_btn">
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
                    <p className="reg-happy">SEND <img src={Btnicon} /> </p>
                  </Button>
                </Box>
              </div>
            </section>
             <section className="add-remove add-remove-succes">
              <div className="add-remove_main">
                <Box my={2} className="add-remove_title">
                  <h1>YOUR INVITATION WAS SENT SUPER SUCCESSFULLY.</h1>
                  <p>You can send another.</p>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} className="accept-remove-container">
                  
                      <Button
                        className="successBtn"
                    variant="contained"
                    color="primary"                   
                  >
                    <span>GOT IT</span>
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

export default AddFriendModal;
