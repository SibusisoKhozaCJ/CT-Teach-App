import React from 'react';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import history from "../../shared/lib/history";

import FormHelperText from '@material-ui/core/FormHelperText';
import Loading from '../../shared/components/loader/Loading';
import routes from '../../routes';

const UserConfirmCode = ({ onUpdate, form, loading }) => {
    if (loading) return (<Loading />);

    const handleFormEdit = key => event => onUpdate({...form, [key]: event.target.value})

    return (
        <>
            <Box mb={2}>              
                {/* <Box my={1}>
                    <TextField
                        fullwidth
                        required
                        label="Confirm Code"
                        variant="outlined"                       
                        // value={form.confirmcode}
                        type="number"
                        onChange={handleFormEdit('confirmcode')}
                    />
                </Box> */}
                <FormHelperText>Password reset link sent to your email. Please check in you email and click on the link to reset your password</FormHelperText>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"      
                  onClick={() => history.push(routes.LOGIN)}           
                >
                  <p className="reg-happy">Go To Login Page</p>
                </Button>
            </Box>
        </>
    );
};

export default UserConfirmCode;
