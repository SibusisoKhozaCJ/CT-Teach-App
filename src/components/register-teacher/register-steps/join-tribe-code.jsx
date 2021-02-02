import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const JoinTribeCOde = ({ onUpdate, form }) => {
  const handleFormEdit = (key) => (event) =>
    onUpdate({ ...form, [key]: event.target.value });
  return (
    <div className="registration-form">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my={1}>
            <TextField
              fullWidth
              required
              label="Enter JOIN Code"
              variant="outlined"
              value={form.joincode}
              onChange={handleFormEdit("joincode")}
            />
          </Box>
          <span className="btm-lbl">
            THE SCHOOL ADMIN SHOULD GIVE YOU THIS.
          </span>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my={1}>
            <TextField
              fullWidth
              required
              label="Email"
              variant="outlined"
              type="email"
              onChange={handleFormEdit("email")}
            />
          </Box>
          <span className="btm-lbl">I AGREE TO THE TERMS AND CONDITIONS.</span>
        </Grid>
      </Grid>

      <Grid container spacing={3} className="reg-checkbox">
        <Grid item xs={12}>
          <Box my={1}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="  My school is already signed up."
              labelPlacement="end"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default JoinTribeCOde;
