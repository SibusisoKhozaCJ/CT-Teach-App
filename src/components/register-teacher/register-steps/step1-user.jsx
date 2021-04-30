import React, { useMemo, useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AutocompleteSelect from "../../../shared/components/inputs/AutocompleteSelect";
import CommonSelect from "../../../shared/components/inputs/CommonSelect";


const daysOfTheMonth = Array(31)
  .fill()
  .map((_, idx) => (1 + idx).toString())
  .map(option => option.length === 1 ? `0${option}` : option);
const UserRegisterStep1 = ({ onUpdate, form, formOptions }) => {
  const { dob } = form;
  const [month, day, year] = dob ? dob.split('/') : ['', '', ''];
  const handleFormEdit = (key) => (event) =>
    onUpdate({ ...form, [key]: event.target.value });
  const handleDobEdit = key => val => {
    let newDob;
    if (key === 'year') {
      newDob = [month, day, val];
    } else if (key === 'month') {
      newDob = [val, day, year];
    } else if (key === 'day') {
      newDob = [month, val, year];
    } else return;
    onUpdate({ ...form, 'dob': newDob.join('/') })

  };
  const yearOptions = useMemo(() => {
    return (
      Array(112)
        .fill(10)
        .map((value, idx) => (2021 - idx).toString())
    );
  }, [])
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
                {/* <TextField
                  fullWidth
                  label="Day"
                  variant="outlined"
                  value={form.day}
                  onChange={handleFormEdit("day")}
                /> */}
                {/* <AutocompleteSelect
                  type="number"
                  maxDigits={2}
                  label="Day"
                  selectedValue={day}
                  options={daysOfTheMonth}
                  onSelect={handleDobEdit('day')}
                  /> */}
                <CommonSelect
                  options={daysOfTheMonth}
                  placeholder={"Date"}
                  selectedValue={day}
                  onSelect={handleDobEdit('day')}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box my={1}>
                {/* <TextField
                  fullWidth
                  label="Month"
                  variant="outlined"
                  value={form.month}
                  onChange={handleFormEdit("month")}
                /> */}
                <CommonSelect
                  options={daysOfTheMonth}
                  placeholder={"Month"}
                  selectedValue={month}
                  options={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']}
                  onSelect={handleDobEdit('month')}
                />
                {/* <AutocompleteSelect
                  label="Month"
                  type="number"
                  maxDigits={2}
                  selectedValue={month}
                  options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
                  onSelect={handleDobEdit('month')}
                            /> */}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box my={1}>
                {/* <TextField
                  fullWidth
                  required
                  label="Year"
                  variant="outlined"
                  value={form.year}
                  onChange={handleFormEdit("year")}
                /> */}
                <CommonSelect
                  placeholder={"Year"}
                  selectedValue={year}
                  options={yearOptions}
                  onSelect={handleDobEdit('year')}
                />
                {/* <AutocompleteSelect
                    label="Year"
                    type="number"
                    maxDigits={4}
                    selectedValue={year}
                    options={yearOptions}
                    onSelect={handleDobEdit('year')}
                /> */}
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default UserRegisterStep1;
