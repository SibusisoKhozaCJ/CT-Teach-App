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
       <>
         <section className="registration">
            <div className="registration_main">                
                <Box my={2} className="registration_title">
                  <h1>REGISTRATION IS <br/>SOOOOO EASY</h1>
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
                           <p className="reg-happy">WOOOO HOOOO!</p>
                           <p className="reg">REGISTER</p>
                        </Button>
                    </form>
                </Box>
                <div className="letlogin">
                <Box pb={2} display="flex" justifyContent="center" alignItems="center" fullWidth>
                I’ve been here before.
                        <Button
                            color="primary"
                            style={{ textTransform: 'none', textDecoration: 'underline' }}
                            variant="text"
                            to={`${routes.LOGIN}${search}`}
                            component={NavLink}
                                 >
                             Let me login.
                        </Button>
                    </Box>
                    </div>
            </div>
            </section>

                <section className="registration">
                <div className="registration_main">                
                    <Box my={2} className="registration_title">
                    <h1>  WELCOME!</h1>
                    <span>WE’RE SO EXCITED.</span> 
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
                            <p className="reg-happy">LET’S DO IT.</p>                         
                            </Button>
                        </form>
                    </Box>                
                </div>
                </section>

                <section className="registration">
                <div className="registration_main">                
                    <Box my={2} className="registration_title">
                    <h1> SCHOOL DETAILS!</h1>
                  
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
                            <p className="reg-happy">DONE!  ;)</p>                         
                            </Button>
                        </form>
                    </Box>                
                </div>
                </section>
   </>    
    );
}

export default NewAccountPage;
