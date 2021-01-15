/**
 * This is the login page for accounts that already exist in Cognito. It sets the tokens
 * for the app upon login for authorization. There is some duplicated logic here when handling
 * cognito that is also in CreatePage.jsx
 */

import React, { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { parse } from 'qs';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loading from '../../shared/components/loader/Loading';
import ROUTES from '../../routes';
import history from '../../shared/lib/history';
import HeaderLogo from '../../assets/icons/Header';
import { AuthContext } from '../../shared/contexts/authContext';
import * as Auth from '../../shared/lib/authentication'
const LoginPage = () => {
    const [loading, updateLoading] = useState(false);
    const [error, updateError] = useState();
    const { setTokens } = useContext(AuthContext);
    const { search } = useLocation();
    const params = parse(search, { ignoreQueryPrefix: true });
    const [form, updateForm] = useState({ email: params.email, password: '' });
    const { email, password } = form;

    const handleChange = key => event => {
        const { target: { value } } = event;
        updateForm({ ...form, [key]: value });
    }

    const submitForm = async event => {
        const { email, password } = form;
        event.preventDefault();
        updateLoading(true);

        Auth.signIn(email, password)
            .then(res => {


                Auth.getProfile()
                    .then((user) => {
                        Auth.setCookies(email, user.firstname);
                        setTokens({ isAuthenticate: true })
                        updateLoading(false);
                        if (params && params.redirect) {
                            const { redirect } = params;
                            history.push(redirect);
                        } else {
                            history.push(ROUTES.WELCOME)
                        }
                    })
                    .catch((err) => {
                        updateError(err.message);
                        updateLoading(false);
                    })


            }).catch(err => {
                updateError(err.message);
                updateLoading(false);
            });
    }

    return (
        <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pt={10}
            margin="auto"
        >
            <Card raised style={{ width: "100%", borderRadius: "10px" }}>
                <Box py={2}>
                    <HeaderLogo light width="40%" />
                    {error && <Typography>{error}</Typography>}
                    <form onSubmit={submitForm}>
                        <Box py={1}>
                            <Typography variant="h3" color="textPrimary">User Login</Typography>
                        </Box>
                        <Box px={6}>
                            <Box py={1}>
                                <TextField
                                    required
                                    label="Email"
                                    variant="outlined"
                                    type="text"
                                    value={email}
                                    fullwidth={isMobile}
                                    onChange={handleChange('email')}
                                />
                            </Box>
                            <Box py={1}>
                                <TextField
                                    required
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    fullwidth={isMobile}
                                    onChange={handleChange('password')}
                                />
                            </Box>
                        </Box>
                        {loading
                            ? <Loading small />
                            : (<Box py={1} width="100%">
                                <Button type="submit" color="primary" variant="outlined">Log in</Button>
                            </Box>
                            )}
                    </form>
                    <Box py={1} width="100%">
                        <Button
                            color="primary"
                            style={{ textTransform: 'none', textDecoration: 'underline' }}
                            variant="text"
                            to={ROUTES.RESET}
                            component={NavLink}
                        >
                            Forgot password
                        </Button>
                    </Box>
                    <Box py={1} width="100%">
                        <Button
                            color="primary"
                            style={{ textTransform: 'none', textDecoration: 'underline' }}
                            variant="text"
                            to={`${ROUTES.NEW_ACCOUNT}${search}`}
                            component={NavLink}
                        >
                            Create a New Account
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}

export default LoginPage;
