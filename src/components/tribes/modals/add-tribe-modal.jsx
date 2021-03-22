import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  MailiconSVG,
  MailsendIconSVG,
  CopySVG,
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

const AddFriendModal = ({ openModal, handleModalClose}) => {
  var theme = useTheme();
  const classes = useStyles(theme);
  const [friendToAddID, setFriendToAddID] = useState("");
  const [addFriendRespone, setAddFriendRespone] = useState({
    status: "",
    message: "",
  });
 
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
            <section className="send-code joinTribe Addfrnd-request Tribe-request">
              <div className="send-code_main">
                <Box my={2} className="send-code_title">
                  <h1>ADD TO TRIBE</h1>
                  <p>How do you wanna invite?</p>
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
                   <Grid item xs={12}>
                    <Box my={1}>
                      <TextField
                             InputProps={{
                        startAdornment: <CopySVG />
                      }}
                        fullWidth
                        placeholder="codetribe.com/join/3495"
                        variant="outlined"
                        value={friendToAddID}
                        onChange={(e) => setFriendToAddID(e.target.value)}
                     
                      />
                    </Box>
                  
                  </Grid>
                    <label className="errormsg">
                                This is error message
                    </label>
                 
                   
                </Grid>
                 <Box my={2} className="copytolink">
                  
                    <p>
                      TIP: Copy the link above and send it to your friends.
                    </p>
                </Box>

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
                    
                  >
                    <p className="reg-happy">SHARE LINK  </p>
                  </Button>
                </Box>
              </div>
            </section>
             {/* <section className="add-remove add-remove-succes">
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
              
            </section> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddFriendModal;
