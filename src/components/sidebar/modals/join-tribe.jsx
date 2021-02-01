import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import * as Auth from "../../../shared/lib/authentication";
import { useDispatch } from "react-redux";
import { addUserToTribe } from "../../../redux/actions/tribe-actions";

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

const CheckIfTribeCodeExist = async (code) => {
  return await Auth.checkIfTribeExist(code)
    .then((tribe) => {
      return tribe;
    })
    .catch((err) => {
      return null;
    });
};

const JoinTribeModal = ({
  openModal,
  handleModalClose,
  checked,
  handleJoinLinkChange,
}) => {
  var theme = useTheme();
  const classes = useStyles(theme);
  const dispatch = useDispatch();
  const [joinLinkOrCodeValue, setJoinLinkOrCodeValue] = useState("");
  const [joinTribeResponse, setJoinTribeResponse] = useState({
    status: "",
    message: "",
  });
  const handleTribeJoin = async () => {
    if (!checked) {
      const isCodeExist = await CheckIfTribeCodeExist(joinLinkOrCodeValue);
      if (isCodeExist) {
        dispatch(addUserToTribe(joinLinkOrCodeValue, isCodeExist)).then(
          (res) => {
            setJoinTribeResponse({
              status: "green",
              message: "Succesfully Added To The Tribe",
            });
          }
        );
      } else {
        setJoinTribeResponse({
          status: "red",
          message: "The Entered Tribe is Not Found",
        });
      }
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={()=>{handleModalClose();setJoinTribeResponse({status: "",message: ""});}}
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
                  <h1>ENTER “JOIN” LINK/CODE</h1>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box my={1}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        value={joinLinkOrCodeValue}
                        onChange={(e) => setJoinLinkOrCodeValue(e.target.value)}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={3} className="reg-checkbox">
                  <Grid item xs={12}>
                    <Box my={1}>
                      <FormControlLabel
                        className={checked ? "active" : ""}
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={handleJoinLinkChange}
                          />
                        }
                        label="JOIN WITH LINK"
                        labelPlacement="end"
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Box my={2}>
                  {joinTribeResponse.message && (
                    <p style={{ color: `${joinTribeResponse.status}` }}>
                      {joinTribeResponse.message}
                    </p>
                  )}
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleTribeJoin}
                  >
                    <p className="reg-happy">OK, JOIN IT.</p>
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

export default JoinTribeModal;
