import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import  Btnicon from "../../../assets/icons/tribe/sendicon.svg";
import Newicon from "./../../../assets/images/inputicon.png";
import {
  MailiconSVG,
  MailsendIconSVG,
  CopySVG,
  InArrowSVG,
  InCopySVG
} from "../../../shared/svgs/menu-items";
import FlashMessage from 'react-flash-message';
import {getAppBaseUrl} from "../../../helper";
import CopyToClipboard from "react-copy-to-clipboard";
import { Typography } from "@material-ui/core";

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

const AddFriendModal = ({userShareLink, openModal, handleModalClose, handleSendRequest, handleSuccessRequest,successErrorMessage,showSuccessMessage }) => {
  var theme = useTheme();
  const classes = useStyles(theme);
  const [copied, setCopied] = useState(false);
  const [friendToAddID, setFriendToAddID] = useState("");
  const [friendToAddIDUserName, setFriendToAddIDUserName] = useState("");
  const [friendRequestNote, setfriendRequestNote] = useState("");
  const [addFriendRespone, setAddFriendRespone] = useState({
    status: "",
    message: "",
  });
  const [checked, setChecked] = useState(false);
    const closeModal = () => {
      handleSuccessRequest();
    }

    const resetOnCloseModal=()=>{
      setFriendToAddID("");
      setFriendToAddIDUserName("")
      setChecked(false)
      setfriendRequestNote("")
      handleSuccessRequest();
       
    }

  const handleAddFriendRequest = async () => {
    if (friendToAddID !== "" || friendToAddIDUserName !== "") {
      handleSendRequest(friendToAddID, friendToAddIDUserName, friendRequestNote);
      console.log('friendRequestNotefriendRequestNote',friendRequestNote);
    } else {
      alert("Please enter a valid username/email");
    }
  };

  useEffect(() => {
    if(copied){
      const interval = setInterval(() => {
        setCopied(false);
      }, 5000);
      return () => clearInterval(interval);
    }
    
  }, [copied]);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={() => {
          resetOnCloseModal();
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
            {!showSuccessMessage &&  <div className="send-code_main">
                <Grid container justify="flex-end">
                  <Typography className="close-req-modal" onClick={()=>{resetOnCloseModal();handleModalClose()}}>X</Typography>
                  </Grid>
                <Box my={2} className="send-code_title">
                  <h1>ADD FRIEND</h1>
                  <p>How do you wanna invite?</p>
                </Box>
                <Grid container spacing={3} className="sentmailReq">
                <Grid item xs={12} >
                    <Box my={1}>
                      <TextField
                             InputProps={{
                        startAdornment: <MailiconSVG />,
                          endAdornment: friendToAddID !== "" ? <img src={Newicon}/> : <InArrowSVG />,
                      }}
                        fullWidth
                        placeholder="FRIEND’S EMAIL"
                        variant="outlined"
                        value={friendToAddID}
                        onChange={(e) => {setFriendToAddID(e.target.value);setFriendToAddIDUserName("")} }
                     
                      />
                    </Box>
                  </Grid>
                    <Grid item xs={12} className={friendToAddID !== "" ? "show":"hide"}>
                     <label className="addNote">Wanna add a note? </label>
                    <Box my={1}>
                      <TextField
                        fullWidth
                        placeholder="Hey, this is a super fun coding app. Join me."
                        variant="outlined"
                        multiline
                        rows={3} 
                        value={friendRequestNote}
                        onChange={(e) => setfriendRequestNote(e.target.value)}

                      
                      />
                    </Box>
                  </Grid>
                 
             <Grid item xs={12}>
                    <Box my={1}>
                      <TextField
                             InputProps={{
                        startAdornment: <MailsendIconSVG />,
                          endAdornment: friendToAddIDUserName !== "" ? <img src={Newicon}/> : <InArrowSVG />,
                      }}
                        fullWidth
                        placeholder="USERNAME"
                        variant="outlined"
                        value={friendToAddIDUserName}
                        onChange={(e) => { setFriendToAddIDUserName(e.target.value); setFriendToAddID("")}}
                     
                      />
                    </Box> 
                  
                  </Grid>

                      <Grid item xs={12} className={friendToAddIDUserName !== "" ? "show":"hide"}>
                     <label className="addNote">Wanna add a note? </label>
                    <Box my={1}>
                      <TextField
                        fullWidth
                        placeholder="Hey, this is a super fun coding app. Join me."
                        variant="outlined"
                        multiline
                        rows={3} 
                        value={friendRequestNote}
                        onChange={(e) => setfriendRequestNote(e.target.value)}

                      
                      />
                    </Box>
                  </Grid>
                    <label className="errormsg">
                                {successErrorMessage !== '' ? successErrorMessage: ''}
                    </label>

                       <Grid item xs={12}>
                      <Box my={1} className="join-link-input">
                      <CopyToClipboard onCopy={() => setCopied(true)} text={getAppBaseUrl()+userShareLink}>
                      <TextField
                          InputProps={{
                            startAdornment: <CopySVG />,
                            endAdornment: <InCopySVG />,   
                          }}
                          fullWidth
                          variant="outlined"
                          value={getAppBaseUrl()+userShareLink}
                          disabled
                        />
                    </CopyToClipboard>
                      <div className="flash-message-copied">
                      {copied &&<FlashMessage duration={5000} persistOnHover={true}>
                        <p>Link copied</p>
                      </FlashMessage>}
                      </div>
                      </Box>
                    </Grid>                 
                      <Box my={2} className="copytolink">
                        <p>TIP: Copy the link above and send it to your friends.</p>
                      </Box>
                 
                    {/* <Grid container spacing={3} className="reg-checkbox frnd-checkbox">
                      <Grid item xs={12}>
                        <Box my={1}>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="  Search by User Name"
                            labelPlacement="end"
                            checked={checked}
                            onChange={() => {setChecked(!checked); setFriendToAddID(""); setFriendToAddIDUserName("");}}
                          />
                        </Box>
                      </Grid>
                    </Grid> */}
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
              </div> }
            </section> 
            {showSuccessMessage &&  <section className="add-remove add-remove-succes">
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
                    onClick={resetOnCloseModal}                
                  >
                    <span>GOT IT</span>
                  </Button>
                  </Grid>
                </Grid>
              </div>
              
            </section> }
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddFriendModal;
