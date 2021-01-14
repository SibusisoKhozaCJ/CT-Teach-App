import React, { useState, useContext } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { parse } from 'qs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import routes from '../../routes';
import { firebaseInsert, firebaseGet } from '../../shared/lib/authorizedFetch';
import * as Auth from '../../shared/lib/authentication';
import { AuthContext } from '../../shared/contexts/authContext';
import TeacherRegisterStep1 from './register-steps/step1';
import TeacherRegisterStep2 from './register-steps/step2';
import TeacherRegisterStep3 from './register-steps/step3';
import referralCodeGenerator from 'referral-code-generator'

const NewAccountPage = () => {
    const history = useHistory();
    const [currentStep, setCurrentStep] = useState(1);
    const { search, state: fromSignInData } = useLocation();
    const params = parse(search, { ignoreQueryPrefix: true });
    const [form, updateForm] = useState({ email: params.email, password: fromSignInData && fromSignInData.password, firstname: "", lastname: "", type: "", schoolName: "", day: "", month: "", year: "", city: "", isTeacher: false, phone: "" });
    const [loading, updateLoading] = useState(false);
    const [error, updateError] = useState();
    const { setUser, setTokens } = useContext(AuthContext);
    const handleSubmit = async e => {
        const { email, password, firstname, lastname, city, day, month, year, type, phone, schoolName, isTeacher } = form
        e.preventDefault();
        updateLoading(true);
        updateError('');
        Auth.createUser(email, password)
            .then(async (res) => {
                console.log(res)
                const tribeCode = referralCodeGenerator.alphaNumeric('uppercase', 2, 3);
                const isCodeExist = await CheckIfTribeCodeExist(tribeCode);
                if (isCodeExist) {
                    alert("Error while creting a tribe.")
                } else {
                    firebaseInsert('Tribes/' + tribeCode, {
                        code: tribeCode,
                        users: [res.user.uid]
                    });
                    firebaseInsert('Teachers/' + res.user.uid, {
                        email: email,
                        firstname: firstname,
                        lastname: lastname,
                        city: city,
                        dob: day + "-" + month + "-" + year,
                        phone: phone,
                        schoolName: schoolName,
                        type: type,
                        userRole: 'teacher',
                        tribe_code: 'FC123',
                        tribe_joned: []
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

                }
            })
            .catch(err => {
                updateError(err.message);
                updateLoading(false);
            });
    };

    const CheckIfTribeCodeExist = async (code) => {
        return await Auth.checkIfTribeExist(code).then((tribe) => {
                return tribe ? true : false
            })
            .catch((err) => {
                return false
            })
    }

    const handleSubmitFirstForm = async e => {
        e.preventDefault();
        updateError('');
        setCurrentStep(2)
    };

    const handleSubmitSecondForm = async e => {
        e.preventDefault();
        updateError('');
        setCurrentStep(3)
    };

    return (
        <>
            {currentStep == 1 && <section className="registration">
                <div className="registration_main">
                    <Box my={2} className="registration_title">
                        <h1>REGISTRATION IS <br />SOOOOO EASY</h1>
                    </Box>
                    <Box my={2}>
                        {error && <Box my={1}><Typography color="error">{error}</Typography></Box>}
                        <form onSubmit={handleSubmitFirstForm}>
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
            </section>}

            {currentStep === 2 && <section className="registration">
                <div className="registration_main">
                    <Box my={2} className="registration_title">
                        <h1>  WELCOME!</h1>
                        <span>WE’RE SO EXCITED.</span>
                    </Box>
                    <Box my={2}>
                        {error && <Box my={1}><Typography color="error">{error}</Typography></Box>}
                        <form onSubmit={handleSubmitSecondForm}>
                            <TeacherRegisterStep2
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
            </section>}

            {currentStep === 3 && <section className="registration">
                <div className="registration_main">
                    <Box my={2} className="registration_title">
                        <h1> SCHOOL DETAILS!</h1>
                    </Box>
                    <Box my={2}>
                        {error && <Box my={1}><Typography color="error">{error}</Typography></Box>}
                        <form onSubmit={handleSubmit}>
                            <TeacherRegisterStep3
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
            </section>}
        </>
    );
}

export default NewAccountPage;
