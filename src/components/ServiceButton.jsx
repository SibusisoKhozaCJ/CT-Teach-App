/**
 * This button is on the services page only. Clicking through takes the user to the form
 * page with the appropriate form url for the iframe through the location hook.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { palette } from '../theme';

const StyledButton = withStyles(theme => ({
    contained: {
        width: '100%',
        minHeight: '100px',
        borderRadius: '0px',
        color: 'white',
    },
}))(Button);

const ServiceButton = ({ title, subtitle, disabled, icon, onClick }) => (
    <Box my={2}>
        <StyledButton
            variant="contained"
            onClick={onClick}
            disabled={disabled}
            style={disabled ? {} : { backgroundImage: `linear-gradient(30deg, ${palette.primary.main}, #B4E1DF)` }}
        >
            <Grid container>
                {icon && (
                    <Grid item xs={4}>
                        {icon}
                    </Grid>
                )}
                <Grid item xs={icon ? 8 : 12}>
                    <Box textAlign="left" my={2}>
                            <Typography variant="h2">{title}</Typography>
                            <Typography style={{ overflowWrap: 'break-word', hyphens: 'auto' }} variant="subtitle1">{subtitle}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </StyledButton>
    </Box>
);

ServiceButton.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.elementType,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

ServiceButton.defaultProps = {
    subtitle: '',
    icon: null,
    onClick: () => {},
    disabled: false,
};

export default ServiceButton;