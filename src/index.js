/**
 * The highest level component of the entire app. Sets up the urlChangeTracker with 
 * google analytics [which I couldn't get to work :( ] and also provides the Material-UI
 * theme to all the sub-components for the app's lifetime through the Theme Provider.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

window.ga('require', 'urlChangeTracker');
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
