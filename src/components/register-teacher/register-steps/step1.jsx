import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TeacherRegisterStep1 = ({ onUpdate, form }) => {
    const handleFormEdit = key => event => onUpdate({ ...form, [key]: event.target.value })
    const [checked, setChecked] = useState(form.isTeacher);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        onUpdate({ ...form, [event.target.name]: event.target.checked })
    };
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
                                onChange={handleFormEdit('firstname')}
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
                                onChange={handleFormEdit('lastname')}
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
                                    onChange={handleFormEdit('day')}
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
                                    onChange={handleFormEdit('month')}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box my={1}>
                                <TextField
                                    fullWidth
                                    label="Year"
                                    variant="outlined"
                                    value={form.year}
                                    onChange={handleFormEdit('year')}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </div>

                <Grid container spacing={3} className="reg-checkbox">
                    <Grid item xs={12}>
                        <Box my={1}>
                            <FormControlLabel
                                className={checked ? "active" : ""}
                                control={<Checkbox name="isTeacher" checked={checked}
                                onChange={handleChange}  />}
                                label="  I’m a Teacher or Trainer."
                                labelPlacement="end"
                            />
                        </Box>

                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default TeacherRegisterStep1;
