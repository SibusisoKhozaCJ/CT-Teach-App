import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const TeacherRegisterStep3 = ({ onUpdate, form }) => {
    const handleFormEdit = key => event => onUpdate({ ...form, [key]: event.target.value })
    return (
        <>
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
                                value={form.schoolname}
                                onChange={handleFormEdit('schoolname')}
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
                                onChange={handleFormEdit('city')}
                            />
                        </Box>
                       
                    </Grid>
                </Grid>    
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={1}>
                            <TextField
                                fullWidth
                                label="Phone Number (Optional)"
                                variant="outlined"
                                type="text" 
                                value={form.phone}
                                onChange={handleFormEdit('phone')}
                            />
                        </Box>
                       
                    </Grid>
                </Grid>  
            </div>
        </>
    );
};

export default TeacherRegisterStep3;
