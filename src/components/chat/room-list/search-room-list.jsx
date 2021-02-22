import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import IOSSwitch from './switch';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    width: '82%',
    border: '1px solid grey',
    marginLeft: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchRoomList = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="search">
      <Paper component="form" className={classes.root}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase className={classes.input} placeholder="SEARCH" inputProps={{ 'aria-label': 'search' }} />
      </Paper>
      <IOSSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />
    </div>
  );
};

export default SearchRoomList;
