import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const MarginlessButton = withStyles(() => ({
    root: { padding: 0 },
}))(IconButton);

export default ({onClick, ...rest}) => {

    return (
        <MarginlessButton {...rest} onClick={onClick}>
            <ClearIcon fontSize="large" />
        </MarginlessButton>
    );
}