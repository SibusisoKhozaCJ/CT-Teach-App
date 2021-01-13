import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const MarginlessButton = withStyles(() => ({
    root: { padding: 0 },
}))(IconButton);

export default ({ onClick }) => {
    return (
        <MarginlessButton onClick={onClick} >
            <EditIcon fontSize="large" />
        </MarginlessButton>
    );
}