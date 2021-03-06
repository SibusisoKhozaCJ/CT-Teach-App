import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const TeachRegisterStep1 = ({ onUpdate, form }) => {
  const handleFormEdit = (key) => (event) =>
    onUpdate({ ...form, [key]: event.target.value });
  return (
    <>
      <div className="registration-form">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box my={1}>
              <TextField
                fullWidth
                required
                label="Name"
                variant="outlined"
                value={form.name}
                onChange={handleFormEdit("name")}
              />
            </Box>
          </Grid>
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
        </Grid>
      </div>


    </>
  );
};

export default TeachRegisterStep1;
