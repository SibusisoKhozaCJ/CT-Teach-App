/**
 * This is the high-level component that manages the user and token contexts for login,
 * the routing from page to page, and the google analytics pageview sends.
 */

import React, {useEffect, useMemo, useState} from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/header/header';
import LoginPage from './components/login/login-page';
import CreateNewAccountPage from './components/register-teacher/create-new-account';
import ContactUs from './components/contact-us/ContactUs';
import FormPage from './components/home/form-page';
import routes from './routes';
import history from './shared/lib/history';
import { AuthContext } from './shared/contexts/authContext';
import { isAuthenticated, getCookies } from './shared/lib/authentication';
import ResetPage from './components/reset-password/ResetPage';
import Welcome from './components/welcome/Welcome';
import Home from './components/home/home';
import Sidebar from './components/sidebar/sidebar';
import Tribes from "./components/tribes/tribe"
import Profile from "./components/profile/Profile";
import Layout from './hoc/Layout/Layout';
import JoinTribe from "./components/join-tribe/join-tribe-page"
import TribeProfile from "./components/tribes/tribe-profile/tribe-profile"
import "./index.scss";
import Footer from './components/footer/footer';

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  const { pathname, search } = useLocation();
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (isAuthenticated()) {
          window.ga('set', 'page', path);
          window.ga('send', 'pageview');
          console.log('just sent a pageview for: ', path);
          return (
            <Layout pathname={pathname}>
              <Component {...props} />
            < /Layout>
          );
        }

        const redirectPath = (search || pathname !== "/") ? `${routes.LOGIN}?redirect=${encodeURIComponent(`${pathname}${search}`)}` :
          routes.LOGIN;

        window.ga('set', 'page', redirectPath);
        window.ga('send', 'pageview');
        return (<Redirect to={redirectPath} />);
      }
      }
    />
  );
};


const App = () => {
  const location = useLocation();
  const { userId, isAuthenticate, userFirstName, userEmail } = getCookies();
  const [user, setUser] = useState(userId);
  const [tokens, setTokens] = useState({ isAuthenticate });
  const [firstname, setFirstName] = useState(userFirstName);
  const [email, setUserEmail] = useState(userEmail);
  const authProviderValue = useMemo(() => ({
    user,
    setUser,
    tokens,
    setTokens,
    firstname,
    setFirstName,
    email,
    setUserEmail
  }), [user, setUser, tokens, setTokens, firstname, setFirstName, email, setUserEmail]);

  return (
    <Router history={history}>
      <AuthContext.Provider value={authProviderValue}>
        <div className="main">
          {isAuthenticate && <Header />}
          {isAuthenticate && <Sidebar location={location} />}
          <div className={!isAuthenticate ? "center-align-div" : "default-layout"}>
            <Paper>
              <Grid container>
                <Switch>
                  <ProtectedRoute
                    exact
                    path="/"
                    component={FormPage}
                  />
                    <Route path={routes.LOGIN}>
                      <LoginPage />
                    </Route>
                    <Route path={routes.NEW_ACCOUNT}>
                      <CreateNewAccountPage />
                    </Route>
                    <Route path={routes.RESET}>
                      <ResetPage />
                    </Route>
                    <Route path={routes.JOIN_TRIBE_ID}>
                      <JoinTribe isAuthenticated={isAuthenticate}/>
                    </Route>
                    <ProtectedRoute path={routes.HOME} component={Home} />
                    <ProtectedRoute path={routes.WELCOME} component={Welcome} />
                    <ProtectedRoute path={routes.CONTACT_US} component={ContactUs} />
                    <ProtectedRoute path={routes.FORM} component={FormPage} />
                    <ProtectedRoute path={routes.TRIBE} component={Tribes} />
                    <ProtectedRoute path={routes.PROFILE_ID} component={Profile} />
                    <ProtectedRoute path={routes.TRIBE_PROFILE} component={TribeProfile} />
                    <Redirect to="/" />
                  </Switch>
                </Grid>
          </Paper>
          </div>
        </div>
          {isAuthenticate && <Footer />}
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
