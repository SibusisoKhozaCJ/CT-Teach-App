import React, { useCallback, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import IOSSwitch from '../switch/switch';

const SearchRoomList = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: true,
  });

  const handleChange = useCallback(event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  }, []);

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
