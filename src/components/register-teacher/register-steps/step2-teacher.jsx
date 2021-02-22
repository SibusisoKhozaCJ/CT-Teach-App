import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const TeacherRegisterStep2 = ({ onUpdate, form }) => {
  const handleFormEdit = (key) => (event) =>
    onUpdate({ ...form, [key]: event.target.value });
  const [teacherType, setTeacherTypee] = useState(form.type);
  const [checked, setChecked] = useState(form.schoolAlreadySigned);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
    onUpdate({ ...form, [event.target.name]: event.target.checked });
  };
  const handleChange = (event) => {
    setTeacherTypee(event.target.value);
    onUpdate({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="reg-pd">
        <div className="registration-form ">
          <Box my={2} className="registration_title">
            <h1> WELCOME!</h1>
            <span>WE’RE SO EXCITED.</span>
          </Box>
          {!checked && (
            <>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box my={1}>
                    <FormControl variant="filled">
                      <InputLabel id="demo-simple-select-filled-label">
                        TYPE
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={teacherType}
                        name="type"
                        onChange={handleChange}
                      >
                        <MenuItem value={"school"}>SCHOOL</MenuItem>
                        <MenuItem value={"org"}>ORGANIZATION</MenuItem>
                        <MenuItem value={"individual"}>INDIVIDUAL</MenuItem>
                        <MenuItem value={"distric"}>DISTRICT</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <span className="btm-lbl">
                    CHOOSE: SCHOOL, ORG, INDIVIDUAL OR DISTRICT.
                  </span>
                </Grid>
              </Grid>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box my={1}>
                    <TextField
                      fullWidth
                      required
                      label="School Name"
                      variant="outlined"
                      type="text"
                      value={form.schoolname}
                      onChange={handleFormEdit("schoolname")}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box my={1}>
                    <TextField
                      fullWidth
                      required
                      label="City"
                      variant="outlined"
                      type="text"
                      value={form.city}
                      onChange={handleFormEdit("city")}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Box my={1}>
                    <FormControlLabel
                      value="end"
                      className={checked ? "active" : ""}
                      control={
                        <Checkbox
                          name="schoolAlreadySigned"
                          checked={checked}
                          onChange={handleCheckChange}
                        />
                      }
                      label="  My school is already signed up.."
                      labelPlacement="end"
                    />
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
          {checked && (
            <div className="codpage techer-code">
              <Grid item xs={12}>
                <div id="wrapper">
                  <div id="codeform">
                    <span className="techer-name">S-</span>
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
              <Grid className="reg-checkbox" item xs={12}>
                <Grid xs={12}>
                  <FormControlLabel
                    className="active"
                    control={
                      <Checkbox
                        name="isTeacher"
                        checked={checked}
                        onChange={handleCheckChange}
                      />
                    }
                    label=" My school is already signed up"
                    labelPlacement="end"
                  />
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherRegisterStep2;
