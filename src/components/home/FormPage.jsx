/**
 * This page houses the iframe forms. It expects the form url and other context
 * to be passed in through the location hook.
 */

import React from 'react';

import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';

import ROUTES from '../../routes';
import history from '../../shared/lib/history';

// import useWindowDimensions from '../hooks/getWindowDimensions';

const FormPage = ({ location }) => {

    const { state: { src } = {}, search } = location;

    if (!search && !src) history.push(ROUTES.HOME)

    return (
        <Grid item xs={12}>

            <Box mt={-2} mb={2} display="flex" justifyContent="center" >
                Welcome
            </Box>

        </Grid>
    );
};

export default FormPage;
