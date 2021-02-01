import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const TeacherRegisterStep2 = ({ onUpdate, form }) => {
    const handleFormEdit = key => event => onUpdate({ ...form, [key]: event.target.value });
    const [teacherType, setTeacherTypee] = useState(form.type);
    const [checked, setChecked] = useState(form.schoolAlreadySigned);

    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
        onUpdate({ ...form, [event.target.name]: event.target.checked })
    };
    const handleChange = (event) => {
        setTeacherTypee(event.target.value);
        onUpdate({ ...form, [event.target.name]: event.target.value })
    };
    return (
        <>
            <div className="registration-form">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={1}>
                            {!checked && <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">TYPE</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={teacherType}
                                    name="type"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'school'}>SCHOOL</MenuItem>
                                    <MenuItem value={'org'}>ORGANIZATION</MenuItem>
                                    <MenuItem value={'individual'}>INDIVIDUAL</MenuItem>
                                    <MenuItem value={'distric'}>DISTRICT</MenuItem>
                                </Select>
                            </FormControl>}
                            {checked && <TextField
                                fullWidth
                                required
                                label="Enter JOIN Code"
                                variant="outlined"
                                value={form.joincode}
                                onChange={handleFormEdit('joincode')}
                            />}
                        </Box>
                        <span className="btm-lbl">CHOOSE: SCHOOL, ORG, INDIVIDUAL OR DISTRICT.</span>
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
                                value={form.email}
                                onChange={handleFormEdit('email')}
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
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={form.password}
                                onChange={handleFormEdit('password')}
                            />
                        </Box>
                        <span className="btm-lbl">I AGREE TO THE TERMS AND CONDITIONS.</span>
                    </Grid>


                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={1}>
                            <FormControlLabel
                                value="end"
                                className={checked ? "active" : ""}
                                control={<Checkbox name="schoolAlreadySigned" checked={checked}
                                disabled={form.schoolAlreadySignedForced}
                                    onChange={handleCheckChange} color="primary" />}
                                label="  My school is already signed up.."
                                labelPlacement="end"
                            />
                        </Box>

                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default TeacherRegisterStep2;
