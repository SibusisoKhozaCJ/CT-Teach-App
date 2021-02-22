import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

const UserRegisterStep2 = ({ onUpdate, form }) => {
  const handleFormEdit = (key) => (event) =>
    onUpdate({ ...form, [key]: event.target.value });
  const [checked, setChecked] = useState(form.isTeacher);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onUpdate({ ...form, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <div className="registration-form">
      
        {!checked && (
          <>
            <h2>
          WANNA ADD AN <br />
          EMAIL?
        </h2>
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
              <Grid item xs={12}>
                <Box my={1}>
                  <TextField
                    fullWidth
                    required
                    label="City"
                    variant="outlined"
                    value={form.city}
                    onChange={handleFormEdit("city")}
                  />
                </Box>
              </Grid>
              <Grid className="reg-checkbox user-chck" item xs={12}>
                <Grid xs={12}>
                  <Box my={1}>
                    <FormControlLabel
                      className={checked ? "active" : ""}
                      control={
                        <Checkbox
                          name="isTeacher"
                          checked={checked}
                          onChange={handleChange}
                        />
                      }
                      label=" My school is already signed up"
                      labelPlacement="end"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container className="skp-sur-btn" spacing={1}>
                <Grid item xs={4}>
                  <Button className="skip-btn">SKIP</Button>
                </Grid>
                <Grid item xs={8} className="sure-btn">
                  <Button>SURE</Button>
                </Grid>
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
            </Grid>
          </>
        )}
      </div>

      {/* CODE PAGE */}
      {checked && (
        <div className="codpage">
          <h1>AWESOME. </h1>
          <h2>SOMEONE WANTS YOU ON-BOARD.</h2>
          <Grid item xs={12}>
            <div id="wrapper">
              <div id="codeform">
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
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
                    name="isTeacher"
                    checked={checked}
                    onChange={handleChange}
                  />
                }
                label=" My school is already signed up"
                labelPlacement="end"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className="sure-btn">
            <Button>LET’S DO IT.</Button>
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
