import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Loading from './Loading';

const UserSignUp = ({ onUpdate, form, loading }) => {
    if (loading) return (<Loading />);

    const handleFormEdit = key => event => onUpdate({...form, [key]: event.target.value})

    return (
        <>
            <Box mb={2}>
                <Box my={1}>
                    <TextField
                        fullWidth
                        required
                        label="Email"
                        variant="outlined"
                        value={form.email}
                        onChange={handleFormEdit('email')}
                    />
                </Box>
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
                <FormHelperText>Passwords must be at least 8 characters long and include numbers, lowercase letters, uppercase letters, and at least one symbol.</FormHelperText>
            </Box>
        </>
    );
};

export default UserSignUp;
