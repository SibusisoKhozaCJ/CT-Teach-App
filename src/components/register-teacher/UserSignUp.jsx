import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import Loading from '../../shared/components/loader/Loading';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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



        </>
    );
};

export default UserSignUp;
