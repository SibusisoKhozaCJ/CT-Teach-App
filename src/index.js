import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './shared/components/theme';
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { BrowserRouter } from 'react-router-dom';

window.ga('require', 'urlChangeTracker');
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>  
      <App />
      </BrowserRouter>  
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
