import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { parse } from "qs";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loading from "../../shared/components/loader/Loading";
import ROUTES from "../../routes";
import history from "../../shared/lib/history";
import HeaderLogo from "../../assets/icons/Header";
import { AuthContext } from "../../shared/contexts/authContext";
import Bicon from "../../assets/images/b-icon.svg"
import MailIcon from "../../assets/images/mail.svg"
import Grid from "@material-ui/core/Grid";
import {
  addUserToTribe
} from "../../redux/actions/tribe-actions";
import * as Auth from "../../shared/lib/authentication";
import routes from "../../routes";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [loading, updateLoading] = useState(false);
  const [error, updateError] = useState();
  const { setTokens } = useContext(AuthContext);
  const { search } = useLocation();
  const params = parse(search, { ignoreQueryPrefix: true });
  const [form, updateForm] = useState({ email: params.email, password: "" });
  const { email, password } = form;

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

  const submitForm = async (event) => {
    const { email, password } = form;
    event.preventDefault();
    updateLoading(true);
    Auth.signIn(email, password)
      .then((res) => {
        Auth.getProfile()
          .then(async (user) => {
            Auth.setCookies(email, user.firstname);
            setTokens({ isAuthenticate: true });
            updateLoading(false);
            if (params && params.redirect) {
              const { redirect } = params;
              if(history.location && history.location.search.indexOf("redirect=/join") >= 0){
                let paramsString = redirect.replace("/join/", "");
                paramsString = paramsString.split("-")[0];
                if(user.tribe_joined.includes(paramsString)){
                  history.push(routes.TRIBE);
                }
                else{
                  const isCodeExist = await CheckIfTribeCodeExist(paramsString);
                  if (isCodeExist) {
                    dispatch(addUserToTribe(paramsString, isCodeExist,user)).then((res) => {
                      history.push(routes.TRIBE);  
                    });
                  }
                  else{
                    history.push(routes.TRIBE);  
                  }
                } 
              }
              else
                history.push(redirect);
            } else {
              history.push(ROUTES.WELCOME);
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
  };

  return (
    <>
    {/* old login form */}
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
              <Typography variant="h3" color="textPrimary">
                User Login
              </Typography>
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
                  onChange={handleChange("email")}
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
                  onChange={handleChange("password")}
                />
              </Box>
            </Box>
            {loading ? (
              <Loading small />
            ) : (
              <Box py={1} width="100%">
                <Button type="submit" color="primary" variant="outlined">
                  Log in
                </Button>
              </Box>
            )}
          </form>
          <Box py={1} width="100%">
            <Button
              color="primary"
              style={{ textTransform: "none", textDecoration: "underline" }}
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
              style={{ textTransform: "none", textDecoration: "underline" }}
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

    {/* new LoginPage */}
    <div className="login_main-page">
    <div className="login_main">
      <div className="login_header">
          <h1>YAAAAAYYYY! :)</h1>
          <p>Choose your login method.</p>
        </div>
        <div className="login-frm">
           <Grid container  spacing={1}> 
               <Grid item xs={6}>
                    <Button className="login-active" >                      
                      <img src={Bicon} /> BIRTHDAY
                    </Button>
               </Grid>
                  <Grid item xs={6} className="sure-btn">
                    <Button>
                       <img src={MailIcon} />
                        EMAIL
                    </Button>
               </Grid>
          </Grid>
      <p>
        If you forget your password you can use your birthday.
      </p>

      {/* loging by DOB */}

      <div className="login-form">
        <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box my={1}>
              <TextField
                fullWidth
                required
                label="First Name"
                variant="outlined"
              
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
                
                 
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box my={1}>
                <TextField
                  fullWidth
                  label="Month"
                  variant="outlined"
                
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
              
                />
              </Box>
            </Grid>
          </Grid>
        </div>
        </div>
         {/* log end DOB */}
          {/* Email login */}
        <div className="">
         <Grid container spacing={1} className="emaillogin">
          <Grid item xs={12}>
            <Box my={1}>
              <TextField
                fullWidth
                required
                label="Email"
                variant="outlined"
              
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
               
              />
            </Box>
          </Grid>
        </Grid>
        </div>
          <Button
              type="submit"
              fullWidth
              variant="contained"
             className="tech-btn"          
            >
              <p className="reg-happy">I’M BACK</p>
              <p className="reg">LOGIN</p>
            </Button>

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
              style={{ textTransform: "none", textDecoration: "underline" }}
              variant="text"
              to={`${routes.LOGIN}${search}`}
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
