import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Newicon from "./../../../assets/images/inputicon.png"
import {
  MailiconSVG,
  MailsendIconSVG,
  CopySVG,
  InArrowSVG,
  InCopySVG
} from "../../../shared/svgs/menu-items";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FlashMessage from 'react-flash-message'
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

const AddTribeModal = ({ openModal, handleModalClose, joinLink }) => {
  var theme = useTheme();
  const classes = useStyles(theme);
  const [friendEmail, setFriendEmail] = useState("");
  const [friendUserName, setFriendUserName] = useState("");
  const [addFriendRespone, setAddFriendRespone] = useState({
    status: "",
    message: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const sendTribeJoinLink=()=>{
    setShowSuccessModal(true)
  }
  const [copied, setCopied] = useState(false)

  const handleCloseModal = ()=>{
    handleModalClose();
    setAddFriendRespone({ status: "", message: "" });
    setFriendUserName("")
    setFriendEmail("")
    setShowSuccessModal(false);
  }

  const handleShareJoinLink = ()=>{
    try{
      if (navigator.share) {
        navigator.share({
          title: 'Code Tribe',
          text: 'Hey lets join this for a coding adventure.',
          url: joinLink,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
    }catch(err){

    }
  }
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
          setFriendUserName("")
          setFriendEmail("")
          setShowSuccessModal(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper1}>
            {!showSuccessModal && (
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
                            startAdornment: <MailiconSVG />,
                             endAdornment: friendEmail !== "" ? <img src={Newicon}/> : <InArrowSVG />,
                          }}
                          fullWidth
                          placeholder="FRIEND’S EMAIL"
                          variant="outlined"
                          value={friendEmail}
                          onChange={(e) => setFriendEmail(e.target.value)}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box my={1}>
                        <TextField
                          InputProps={{
                            startAdornment: <MailsendIconSVG />,
                            endAdornment: friendUserName !== "" ? <img src={Newicon}/> : <InArrowSVG />,
                          }}
                          fullWidth
                          placeholder="USERNAME"
                          variant="outlined"
                          value={friendUserName}
                          onChange={(e) => setFriendUserName(e.target.value)}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box my={1} className="join-link-input">
                      <CopyToClipboard onCopy={() => setCopied(true)} text={joinLink}>
                      <TextField
                          InputProps={{
                            startAdornment: <CopySVG />,
                            endAdornment: <InCopySVG />,   
                          }}
                          fullWidth
                          variant="outlined"
                          value={joinLink}
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
                  </Grid>
                  <Box my={2} className="copytolink">
                    <p>TIP: Copy the link above and send it to your friends.</p>
                  </Box>

                  <Box my={2} className="add-frndReq_btn">
                    {addFriendRespone.message && (
                      <p style={{ color: `${addFriendRespone.status}` }}>
                        {addFriendRespone.message}
                      </p>
                    )}
                    <Button className="share-tribe-code" onClick={()=> handleShareJoinLink()} fullWidth variant="contained" color="primary">
                      <p className="reg-happy">SHARE LINK </p>
                    </Button>
                  </Box>
                </div>
              </section>
            )}
            {showSuccessModal && (
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
                        onClick={()=>handleCloseModal()}
                      >
                        <span>GOT IT</span>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </section>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddTribeModal;
