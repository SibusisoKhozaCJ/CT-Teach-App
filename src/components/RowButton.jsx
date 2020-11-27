/**
 * This component is the button used in Orders and CarePlans page lists.
 * Clicking through navigatese to the respective details pages.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import capitalizeString from '../lib/capitalizeString';

const StyledButton = withStyles(() => ({
    root: { width: '100%' },
}))(Button);

const RowButton = ({ values, onClick }) => (
    <Box my={1} >
        <StyledButton onClick={onClick}>
            <Grid container>
                <Box textAlign="left" display="flex" flexDirection="column">
                    {
                        Object.entries(values).map(([key, value]) => (
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        {capitalizeString(key)}: {`${key === 'total' ? '$' : ''}${value}` || '--'}
                                    </Typography>
                                </Grid>
                            )
                        )
                    }
                </Box>
            </Grid>
        </StyledButton>
    </Box>
);

RowButton.propTypes = {
    values: PropTypes.shape({}),
    onClick: PropTypes.func,
};

RowButton.defaultProps = {
    values: {},
    onClick: () => {},
};

export default RowButton;