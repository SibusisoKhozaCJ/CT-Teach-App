import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Loading from './Loading';

const UserConfirmCode = ({ onUpdate, form, loading }) => {
    if (loading) return (<Loading />);

    const handleFormEdit = key => event => onUpdate({...form, [key]: event.target.value})

    return (
        <>
            <Box mb={2}>              
                <Box my={1}>
                    <TextField
                        fullWidth
                        required
                        label="Confirm Code"
                        variant="outlined"                       
                        value={form.confirmcode}
                        type="number"
                        onChange={handleFormEdit('confirmcode')}
                    />
                </Box>
                <FormHelperText>Please check your email for your confirmation code and enter it above.</FormHelperText>
            </Box>
        </>
    );
};

export default UserConfirmCode;
