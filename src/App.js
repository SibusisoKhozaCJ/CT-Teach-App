/**
 * This is the high-level component that manages the user and token contexts for login,
 * the routing from page to page, and the google analytics pageview sends.
 */

import React, { useMemo, useState } from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './components/header/Header';
import LoginPage from './components/login/LoginPage';
import NewAccountPage from './components/register-teacher/NewAccountPage';
import ContactUs from './components/ContactUs';
import FormPage from './components/FormPage';
import routes from './routes';
import history from './shared/lib/history';
import { AuthContext } from './shared/contexts/authContext';
import { isAuthenticated, getCookies } from './shared/lib/authentication';
import ResetPage from './components/ResetPage';
import Welcome from './components/Welcome';
import Home from './components/HomePage'
import Profile from "./components/Profile/Profile";

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
          return (<Component {...props} />);
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
        <Header />
        <Paper>
          <Box m={1}>
            <Container>
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
                    <NewAccountPage />
                  </Route>
                  <Route path={routes.RESET}>
                    <ResetPage />
                  </Route>

                  <ProtectedRoute path={routes.HOME} component={Home} />
                  <ProtectedRoute path={routes.WELCOME} component={Welcome} />
                  <ProtectedRoute path={routes.CONTACT_US} component={ContactUs} />
                  <ProtectedRoute path={routes.FORM} component={FormPage} />
                  <ProtectedRoute path={routes.PROFILE} component={Profile} />
                  <Redirect to="/" />
                </Switch>
              </Grid>
            </Container>
          </Box>
        </Paper>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
