import React, { useState } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';

import { parse } from 'qs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import HeaderLogo from '../assets/icons/Header';

import routes from '../routes';
import UserEmail from './UserEmail';
import UserResetConfirmCode from './UserResetConfirmCode';
const ResetPage = () => {
    // const history = useHistory();
    const { search } = useLocation();
    const params = parse(search, { ignoreQueryPrefix: true });
    const [form, updateForm] = useState({ email: params ? params.email : '', password: '' });
    const [isConfirmedCode, updateIsConfirmedCode] = useState(false);
    const [loading, updateLoading] = useState(false);
    const [error, updateError] = useState();
    const [isEmailSent, updateIsEmailSent] = useState(false);

    const resetPassword = () => {
        //    firebase forgot
    }


    const completeResetPassword = () => {
        // firebase auth
    }

    const confirmVerificationCode = () => {
        console.log('Code sent to: ', form.confirmcode, form.password);

        // firebase confirm password 
    }

    const handleSubmit = async e => {
        e.preventDefault();
        updateLoading(true);
        updateError('');

        if (!isEmailSent) {
            resetPassword();
        } else if (!isConfirmedCode) {
            confirmVerificationCode();
        } else {
            completeResetPassword();
        }
    };

    return (<Box py={2}>
        <Box
            width="100%"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <HeaderLogo light width="40%" />
        </Box>
        <div>
            <Box my={2}>
                {!isEmailSent && <Typography>
                    These things happen. In fact it’s probably a security best practice that you do. :-) Please enter
                    your email below. We will send you a confirmation code, which you will enter, in addition to you
                    your new password, in the next screen.
                    </Typography>}
                {isEmailSent && !isConfirmedCode && <Typography>
                    As alluded to, please check your email for the confirmation code. Enter it below and pick a
                    password that matches all the necessary requirements. Pizza4Life! is a great one but honestly,
                    it’s taken and now a little bit passe.
                    </Typography>}
            </Box>
            <Box py={2}>
                <div>
                    <Box my={2}>
                        {error && <Box my={1}><Typography color="error">{error}</Typography></Box>}
                        <form onSubmit={handleSubmit}>
                            {!isEmailSent && <UserEmail
                                onUpdate={updateForm}
                                form={form}
                                loading={loading}
                            />}
                            {isEmailSent && !isConfirmedCode && <UserResetConfirmCode
                                onUpdate={updateForm}
                                form={form}
                                loading={loading}
                            />}
                            {isConfirmedCode && <Box py={2}>
                                <div>
                                    <Box my={2}>
                                        <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            Successfully reset password. Please
                                                <Button
                                                color="primary"
                                                style={{ textTransform: 'none', textDecoration: 'underline', lineHeight: '30px' }}
                                                variant="text"
                                                to={`${routes.LOGIN}${search || `?email=${form.email}`}`}
                                                component={NavLink}
                                            >log back in.</Button>
                                        </Typography>
                                    </Box>
                                </div>
                            </Box>}

                            {!isConfirmedCode && < Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={loading}
                            >
                                Next
                        </Button>}
                        </form>
                    </Box>
                </div>
            </Box >
        </div>
    </Box>
    );
}

export default ResetPage;
