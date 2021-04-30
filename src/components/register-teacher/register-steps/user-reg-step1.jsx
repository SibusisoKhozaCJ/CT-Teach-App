import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import OtpInput from "react-otp-input";

const UserRegisterStep2 = ({ onUpdate, form, handleSubmitWithJoinCode,isCodeChecked,codeCheckd }) => {
    const [errorMessage, setErrMessage] = useState("")
  const handleFormEdit = (key) => (event) =>
    onUpdate({ ...form, [key]: event.target.value });
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
    isCodeChecked(event.target.checked);
    onUpdate({ ...form, [event.target.name]: event.target.checked });
  };

  const handleJoinCodeChange = (code) => {
    onUpdate({ ...form, ["joincode"]: code });
    setErrMessage("");
  };
  return (
    <>
      <div className="registration-form ">
      
        {!codeCheckd && (
          <>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box my={1}>
                  <TextField
                    fullWidth  
                    required                
                    label="Email"                    
                    variant="outlined"
                    value={form.email}
                    onChange={handleFormEdit("email")}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box my={1}>
                  <TextField
                    fullWidth 
                    required                  
                    label="Password"
                     type="password"
                    variant="outlined"
                    value={form.password}
                    onChange={handleFormEdit("password")}
                  />
                </Box>
              </Grid>
              <Grid className="reg-checkbox user-chck usercheckjoin" item xs={12}>
                <Grid xs={12}>
                  <Box my={1}>
                    <FormControlLabel
                      className={checked ? "active" : ""}
                      control={
                        <Checkbox
                        name="schoolAlreadySigned"
                        checked={checked}
                        onChange={handleCheckChange}
                        />
                      }
                      label=' I got a “Join Code”'
                      labelPlacement="end"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </div>

      {/* CODE PAGE */}
      {codeCheckd && (
        <div className="codpage">
          {errorMessage && (<label>{errorMessage}</label>)}
          <h1>AWESOME. </h1>
          <h2>SOMEONE WANTS YOU ON-BOARD.</h2>
          <Grid item xs={12}>
            <div id="wrapper">
              <div id="codeform">
              <OtpInput
                      value={form.joincode}
                      onChange={handleJoinCodeChange}
                      numInputs={5}
                    />
              </div>
              <p className="ent-code">Enter JOIN code.</p>
              <p>If you don’t have this you can add it later.</p>
            </div>
          </Grid>
          <Grid className="reg-checkbox usr-check" item xs={12}>
            <Grid xs={12}>
              <FormControlLabel
                className={checked ? "active" : ""}
                control={
                  <Checkbox
                  name="schoolAlreadySigned"
                  checked={checked}
                  onChange={handleCheckChange}
                  />
                }
                label=' I got a “Join Code”'
                labelPlacement="end"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className="sure-btn">
            <Button onClick={()=>{if(form.joincode && form.joincode !== "" && form.joincode.length === 5){handleSubmitWithJoinCode()}else{setErrMessage("Please enter a valid join code.")}}}>LET’S DO IT.</Button>
          </Grid>
          <div className="newprive">
            <Box
              pb={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              fullWidth
            >
              BY CLICKING I AGREE TO THE TERMS AND CONDITIONS
            </Box>
          </div>
        </div>
      )}

      {/* tech1 */}
    </>
  );
};

export default UserRegisterStep2;
