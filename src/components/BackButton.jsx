import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const MarginlessButton = withStyles(() => ({
    root: { padding: 0 },
}))(IconButton);

export default () => {
    const history = useHistory();

    return (
        <MarginlessButton onClick={() => history.goBack()}>
            <ArrowBackIcon fontSize="large" />
        </MarginlessButton>
    );
}