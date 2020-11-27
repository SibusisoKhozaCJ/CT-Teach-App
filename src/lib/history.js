// Exporting a shared history hook to be used anywhere in the app.

import { createBrowserHistory } from 'history';

export default createBrowserHistory(); 

export const redirectToIndex = () => {
    createBrowserHistory().push('/');
};
