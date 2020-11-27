import React from 'react';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const MarginlessButton = withStyles(() => ({
    root: { padding: 0 },
}))(IconButton);

export default ({ onClick }) => {
    return (
        <MarginlessButton onClick={onClick} >
            <DoneOutlineIcon fontSize="large" />
        </MarginlessButton>
    );
}