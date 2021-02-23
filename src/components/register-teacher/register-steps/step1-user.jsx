import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const UserRegisterStep1 = ({ onUpdate, form }) => {
  const handleFormEdit = (key) => (event) =>
    onUpdate({ ...form, [key]: event.target.value });

  return (
    <>
      <div className="registration-form">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box my={1}>
              <TextField
                fullWidth
                required
                label="First Name"
                variant="outlined"
                value={form.firstname}
                onChange={handleFormEdit("firstname")}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box my={1}>
              <TextField
                fullWidth
                required
                label="Last Name"
                variant="outlined"
                value={form.lastname}
                onChange={handleFormEdit("lastname")}
              />
            </Box>
          </Grid>
        </Grid>
        <div className="Dob-section">
          <h2 className="Dob_title">Date of Birth</h2>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Box my={1}>
                <TextField
                  fullWidth
                  label="Day"
                  variant="outlined"
                  value={form.day}
                  onChange={handleFormEdit("day")}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box my={1}>
                <TextField
                  fullWidth
                  label="Month"
                  variant="outlined"
                  value={form.month}
                  onChange={handleFormEdit("month")}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box my={1}>
                <TextField
                  fullWidth
                  required
                  label="Year"
                  variant="outlined"
                  value={form.year}
                  onChange={handleFormEdit("year")}
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default UserRegisterStep1;
