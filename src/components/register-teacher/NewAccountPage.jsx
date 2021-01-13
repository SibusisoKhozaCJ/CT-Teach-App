/**
 * This page houses both forms for creating a new account. It's two sub-components represent
 * the two forms (cognito and tdh back-end) for profile creation, and the submissions are handled here.
 */

import React, { useState, useContext } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { parse } from 'qs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import UserSignUp from './UserSignUp';
import HeaderLogo from '../../assets/icons/Header';
import routes from '../../routes';
import { firebaseInsert } from '../../shared/lib/authorizedFetch';
import * as Auth from '../../shared/lib/authentication';
import { AuthContext } from '../../shared/contexts/authContext';

const NewAccountPage = () => {
    const history = useHistory();
    const { search, state: fromSignInData, pathname } = useLocation();
    const params = parse(search, { ignoreQueryPrefix: true });
    const [form, updateForm] = useState({ email: params.email, password: fromSignInData && fromSignInData.password, firstname: "", lastname: "" });
    const [loading, updateLoading] = useState(false);
    const [error, updateError] = useState();
    const { setUser, setTokens } = useContext(AuthContext);
    const handleSubmit = async e => {
        const { email, password, firstname, lastname } = form
        e.preventDefault();
        updateLoading(true);
        updateError('');

        Auth.createUser(email, password)
            .then((res) => {
                console.log(res)
                firebaseInsert('Teachers/' + res.user.uid, {
                    email,
                    firstname,
                    lastname,
                    userRole: 'teacher'
                });
                Auth.setCookies(email, firstname);
                setTokens({ isAuthenticate: true })
                updateLoading(false);
                if (params && params.redirect) {
                    const { redirect } = params;
                    history.push(redirect);
                } else {
                    history.push(routes.WELCOME)
                }
               
            })
            .catch(err => {
                updateError(err.message);
                updateLoading(false);
            });
    };

    return (
        <Box py={2}>
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
                <Box mb={1}>
                    <Box pb={2} display="flex" justifyContent="center" fullWidth>
                        <Button
                            color="primary"
                            style={{ textTransform: 'none', textDecoration: 'underline' }}
                            variant="text"
                            to={`${routes.LOGIN}${search}`}
                            component={NavLink}
                        >
                            I already have an account
                        </Button>
                    </Box>
                </Box>
                <Box my={2}>
                    <Typography>
                        Welcome to Teacher Portal! Either your questionnaire is complete or you decided to directly sign up. In
                        order for our providers to review a questionnaire already submitted, you will need to create an
                        account. Please enter the below information to proceed.
                    </Typography>

                </Box>
                <Box my={2}>
                    {error && <Box my={1}><Typography color="error">{error}</Typography></Box>}
                    <form onSubmit={handleSubmit}>
                        <UserSignUp
                            onUpdate={updateForm}
                            form={form}
                            loading={loading}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={loading}
                        >
                            Create Account
                        </Button>
                    </form>
                </Box>
            </div>
        </Box>
    );
}

export default NewAccountPage;
