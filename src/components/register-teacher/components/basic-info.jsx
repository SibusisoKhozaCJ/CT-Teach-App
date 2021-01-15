import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import TeacherRegisterStep1 from '../register-steps/step1';

const BasicInfo = ({ updateForm, form, loading, handleSubmitFirstForm, error, search }) => {
    return (
        <section className="registration">
                <div className="registration_main">
                    <Box my={2} className="registration_title">
                        <h1>REGISTRATION IS <br />SOOOOO EASY</h1>
                    </Box>
                    <Box my={2}>
                        {error && <Box my={1}><Typography color="error">{error}</Typography></Box>}
                        <form autocomplete="off" onSubmit={handleSubmitFirstForm}>
                            <TeacherRegisterStep1
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
    );
};

export default BasicInfo;
