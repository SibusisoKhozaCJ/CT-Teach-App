/**
 * Just a component for the loading gif element.
 */

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const Loading = ({ small }) => 
    <Box display="flex" width="100%" justifyContent="center" my={small ? 1 : 5}><CircularProgress /></Box>

export default Loading;