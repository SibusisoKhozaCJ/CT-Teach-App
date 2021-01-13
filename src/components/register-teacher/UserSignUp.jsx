import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import Loading from '../../shared/components/loader/Loading';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const UserSignUp = ({ onUpdate, form, loading }) => {
    if (loading) return (<Loading />);

    const handleFormEdit = key => event => onUpdate({ ...form, [key]: event.target.value })

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
                                    required
                                    label="Day"
                                    variant="outlined"
                                    onChange={handleFormEdit('day')}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box my={1}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Month"
                                    variant="outlined"

                                    onChange={handleFormEdit('month')}
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
                                    onChange={handleFormEdit('Year')}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </div>

                <Grid container spacing={3} className="reg-checkbox">
                    <Grid item xs={12}>
                        <Box my={1}>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="  I’m a Teacher or Trainer."
                                labelPlacement="end"
                            />
                        </Box>
                      
                    </Grid>
                </Grid>    
            </div>


            {/* <div className="registration-form">               
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={1}>
                        <FormControl variant="filled" >
                            <InputLabel id="demo-simple-select-filled-label">TYPE</InputLabel>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"                           
                          
                            >
                            <MenuItem value="">
                                <em>TYPE</em>
                            </MenuItem>
                            <MenuItem value={10}>TYPE1</MenuItem>
                            <MenuItem value={20}>TYPE2</MenuItem>
                            <MenuItem value={30}>TYPE3</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                        <span className="btm-lbl">I AGREE TO THE TERMS AND CONDITIONS.</span>    
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
            <div className="registration-form">  
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={1}>
                            <TextField
                                fullWidth
                                required
                                label="School Name"
                                variant="outlined"
                                type="text" 
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
                                label="City (Optional)"
                                variant="outlined"
                                type="text" 
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
                                label="Phone Number (Optional)"
                                variant="outlined"
                                type="text" 
                            />
                        </Box>
                       
                    </Grid>
                </Grid>  
            </div> */}
        </>
    );
};

export default UserSignUp;
