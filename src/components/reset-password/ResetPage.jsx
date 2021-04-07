import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { parse } from "qs";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loading from "../../shared/components/loader/Loading";
import ROUTES from "../../routes";
import history from "../../shared/lib/history";
import { AuthContext } from "../../shared/contexts/authContext";
import Bicon from "../../assets/images/b-icon.svg";
import MailIcon from "../../assets/images/mail.svg";
import FrgIcon from "../../assets/images/frgarrow.svg";
import FrgSuccIcon from "../../assets/images/forgetsucc.svg";
import Grid from "@material-ui/core/Grid";
import routes from "../../routes";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [loading, updateLoading] = useState(false);
  const [error, updateError] = useState();
  const { search } = useLocation();
  const params = parse(search, { ignoreQueryPrefix: true });
  const [form, updateForm] = useState({ email: params.email, password: "" });
  const { email, password, firstname, lastname, day, month, year } = form;
  const [loginType, setLoginType] = useState("email");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (key) => (event) => {
    const {
      target: { value },
    } = event;
    // console.log(value);
    updateForm({ ...form, [key]: value });
  };

  const submitForm = async (event) => {
    const { email } = form;
    event.preventDefault();
    alert("Check email " + email);
  };

  return (
    <>
      <div className="login_main-page forgetpswp">
        <div className="login_main">
          <div className="login_header">
            <h1>OOPS. I FORGOT MY PASSWORD</h1>
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
              <Grid item xs={6}>
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
                    <Grid container spacing={1} className="emaillogin">
                      <Grid item xs={12} className="forgetEmail">
                        <Box my={1}>
                          <TextField
                            fullWidth
                            required
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={handleChange("email")}
                          />
                        </Box>
                        {successMessage && successMessage !== "" && (
                          <p>
                          <img src={FrgSuccIcon} /> Ok. We sent the email. Check
                          your inbox.
                        </p>
                        )}
                        
                      </Grid>
                    </Grid>
                  </div>
                )}
                {/* Email login End*/}
                <Grid container spacing={2}>
                  <Grid item xs={3} spacing={0}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="Frgback"
                      onClick={() =>
                          history.push(routes.LOGIN)
                        }
                    >
                      <p className="reg-happy">
                        <img src={FrgIcon} />
                      </p>
                    </Button>
                  </Grid>
                  <Grid item xs={9}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      // onClick={() =>
                      //   history.push(routes.RESET_LINK_CONFIRMATION)
                      // }
                    >
                      <p className="reg-happy">SEND EMAIL</p>
                      <p className="reg">CREATE NEW PASSWORD</p>
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <div className="letlogin">
                <Box
                  pb={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fullWidth
                >
                  I’m new here.
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
    </>
  );
};

export default LoginPage;
