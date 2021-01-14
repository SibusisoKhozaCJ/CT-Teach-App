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
    const [teacherType, setTeacherTypee] = useState('');

    const handleChange = (event) => {
        setTeacherTypee(event.target.value);
        onUpdate({ ...form, ["type"]: event.target.value })
    };
    return (
        <>
            <div className="registration-form">               
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={1}>
                        <FormControl variant="filled" >
                            <InputLabel id="demo-simple-select-filled-label">TYPE</InputLabel>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"  
                            value={teacherType}
                            onChange={handleChange}
                            >
                            {/* <MenuItem value="">
                                <em>TYPE</em>
                            </MenuItem> */}
                            <MenuItem value={'school'}>SCHOOL</MenuItem>
                            <MenuItem value={'org'}>ORGANIZATION</MenuItem>
                            <MenuItem value={'individual'}>INDIVIDUAL</MenuItem>
                            <MenuItem value={'distric'}>DISTRICT</MenuItem>
                            </Select>
                        </FormControl>
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
                                onChange={handleFormEdit('email')}
                            />
                        </Box>
                        <span className="btm-lbl">CHOOSE: SCHOOL, ORG, INDIVIDUAL OR DISTRICT.</span>
                    </Grid>
                  
                
                </Grid>               

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={1}>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
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
