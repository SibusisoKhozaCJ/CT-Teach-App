import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Loading from '../shared/components/loader/Loading';

const UserEmail = ({ onUpdate, form, loading }) => {
    if (loading) return (<Loading />);

    const handleFormEdit = key => event => onUpdate({ ...form, [key]: event.target.value })

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
            </Box>
        </>
    );
};

export default UserEmail;
