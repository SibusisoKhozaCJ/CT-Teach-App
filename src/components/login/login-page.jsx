import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { parse } from "qs";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import ROUTES from "../../routes";
import history from "../../shared/lib/history";
import { AuthContext } from "../../shared/contexts/authContext";
import Bicon from "../../assets/images/b-icon.svg";
import MailIcon from "../../assets/images/mail.svg";
import Grid from "@material-ui/core/Grid";
import { addUserToTribe } from "../../redux/actions/tribe-actions";
import * as Auth from "../../shared/lib/authentication";
import { useDispatch } from "react-redux";
import Backdrop from '@material-ui/core/Backdrop';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loading, updateLoading] = useState(false);
  const [error, updateError] = useState();
  const { setTokens } = useContext(AuthContext);
  const { search } = useLocation();
  const params = parse(search, { ignoreQueryPrefix: true });
  const [form, updateForm] = useState({ email: params.email, password: "" });
  const { email, password, firstname, lastname, day, month, year } = form;
  const [loginType, setLoginType] = useState("email");

  const handleChange = (key) => (event) => {
    const {
      target: { value },
    } = event;
    updateForm({ ...form, [key]: value });
  };

  const CheckIfTribeCodeExist = async (code) => {
    return await Auth.checkIfTribeExist(code)
      .then((tribe) => {
        return tribe;
      })
      .catch((err) => {
        return null;
      });
  };
  const useStyles = makeStyles((theme) => ({
    emailLoginInputField: {
      "& .MuiInputLabel-outlined": {
        zIndex:10
      }
    }
  }))
  const login = async () => {
    const { email, password, firstname, lastname, day, month, year } = form;
    if(loginType === "email"){
      Auth.signIn(email, password)
      .then((res) => {
        Auth.getProfile()
          .then(async (user) => {
            Auth.setCookies(email, user.firstname);
            setTokens({ isAuthenticate: true });
            updateLoading(false);
            if (params && params.redirect) {
              const { redirect } = params;
              if (
                history.location &&
                history.location.search.indexOf("redirect=/join") >= 0
              ) {
                let paramsString = redirect.replace("/join/", "");
                paramsString = paramsString.split("-")[0];
                if (user.tribe_joined.includes(paramsString)) {
                  history.push(ROUTES.TRIBE);
                } else {
                  const isCodeExist = await CheckIfTribeCodeExist(paramsString);
                  if (isCodeExist) {
                    dispatch(
                      addUserToTribe(paramsString, isCodeExist, user)
                    ).then((res) => {
                      history.push(ROUTES.TRIBE);
                    });
                  } else {
                    history.push(ROUTES.TRIBE);
                  }
                }
              } else history.push(redirect);
            } else {
              history.push(ROUTES.HOME);
            }
          })
          .catch((err) => {
            updateError(err.message);
            updateLoading(false);
          });
      })
      .catch((err) => {
        updateError(err.message);
        updateLoading(false);
      });
    }else{
      const emailAddress = (
        firstname +
        lastname +
        day +
        month +
        year +
        "@codejika.com"
      ).toLowerCase();
      const userPassword = (
        firstname +
        lastname +
        day +
        month +
        year
      ).toLowerCase();
      Auth.signIn(emailAddress, userPassword)
      .then((res) => {
        Auth.getProfile()
          .then(async (user) => {
            Auth.setCookies(emailAddress, user.firstname);
            setTokens({ isAuthenticate: true });
            updateLoading(false);
            if (params && params.redirect) {
              const { redirect } = params;
              if (
                history.location &&
                history.location.search.indexOf("redirect=/join") >= 0
              ) {
                let paramsString = redirect.replace("/join/", "");
                paramsString = paramsString.split("-")[0];
                if (user.tribe_joined.includes(paramsString)) {
                  history.push(ROUTES.TRIBE);
                } else {
                  const isCodeExist = await CheckIfTribeCodeExist(paramsString);
                  if (isCodeExist) {
                    dispatch(
                      addUserToTribe(paramsString, isCodeExist, user)
                    ).then((res) => {
                      history.push(ROUTES.TRIBE);
                    });
                  } else {
                    history.push(ROUTES.TRIBE);
                  }
                }
              } else history.push(redirect);
            } else {
              history.push(ROUTES.HOME);
            }
          })
          .catch((err) => {
            updateError(err.message);
            updateLoading(false);
          });
      })
      .catch((err) => {
        updateError(err.message);
        updateLoading(false);
      });
    }
    
  }

  const submitForm = async (event) => {
    event.preventDefault();
    updateLoading(true);
    login();
  };
  const classes = useStyles();

  return (
    <>
     <Backdrop open={true}>
      <div className="login_main-page">
        <div className="login_main">
          <div className="login_header">
            <h1>"YAAAAAYYY, TIME TO LOGIN. :)"</h1>
            <p>Choose your login method.</p>
          </div>
          <div className="login-frm">
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  className={loginType === "dob" ? "login-active" : ""}
                  onClick={() => setLoginType("dob")}
                >
                  <img src={Bicon} /> BIRTHDAY
                </Button>
              </Grid>
              <Grid item xs={6} >
                <Button
                  className={loginType === "email" ? "login-active" : ""}
                  onClick={() => setLoginType("email")}
                >
                  <img src={MailIcon} />
                  EMAIL
                </Button>
              </Grid>
            </Grid>
            <p>If you forget your password you can use your birthday.</p>
            <div className="login-form">
              {error && <Typography>{error}</Typography>}
              <form onSubmit={submitForm}>
                {/* loging by DOB */}
                {loginType === "dob" && (
                  <div>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Box my={1}>
                          <TextField
                            fullWidth
                            required
                            label="First Name"
                            variant="outlined"
                            value={firstname}
                            onChange={handleChange("firstname")}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box my={1}>
                          <TextField
                            fullWidth
                            required
                            label="Last Name"
                            variant="outlined"
                            value={lastname}
                            onChange={handleChange("lastname")}
                          />
                        </Box>
                      </Grid>
                    </Grid>

                    <div className="Dob-section">
                      <h2 className="Dob_title">Date of Birth</h2>
                      <Grid container spacing={3}>
                        <Grid item xs={4}>
                          <Box my={1}>
                            <TextField
                              fullWidth
                              label="Day"
                              variant="outlined"
                              value={day}
                              onChange={handleChange("day")}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box my={1}>
                            <TextField
                              fullWidth
                              label="Month"
                              variant="outlined"
                              value={month}
                              onChange={handleChange("month")}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box my={1}>
                            <TextField
                              fullWidth
                              required
                              label="Year"
                              variant="outlined"
                              value={year}
                              onChange={handleChange("year")}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                )}

                {/* log end DOB */}
                {/* Email login */}
                {loginType === "email" && (
                  <div>
                    <Grid container spacing={1} className={"emaillogin"}>
                      <Grid item xs={12}>
                        <Box my={1}>
                          <TextField
                            fullWidth
                            required
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={handleChange("email")}
                            className={classes.emailLoginInputField}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box my={1}>
                          <TextField
                            fullWidth
                            required
                            label="Password"
                            variant="outlined"
                             type="password"
                            value={password}
                            onChange={handleChange("password")}
                            className={classes.emailLoginInputField}
                          />
                        </Box>
                      </Grid>
                     
                        <Grid item xs={12}  spacing={1} className="forget-psw">
                    <Box my={1}>
                          <Button
                    color="#D50073"
                    variant="text"
                    to={`${ROUTES.RESET}`}
                    component={NavLink}
                  >
                    Forgot password..
                  </Button>
              </Box>
               
              </Grid>
                    </Grid>
                  </div>
                )}
                {/* Email login End*/}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"                 
                >
                  <p className="reg-happy">I???M BACK</p>
                  <p className="reg">LOGIN</p>
                </Button>
              </form>
              <div className="letlogin">
                <Box
                  pb={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fullWidth
                >
                  I???m new here.
                  <Button
                    color="primary"
                    style={{
                      textTransform: "none",
                      textDecoration: "underline",
                    }}
                    variant="text"
                    to={`${ROUTES.NEW_ACCOUNT}${search}`}
                    component={NavLink}
                  >
                    Let me register.
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Backdrop>
    </>
  );
};

export default LoginPage;
