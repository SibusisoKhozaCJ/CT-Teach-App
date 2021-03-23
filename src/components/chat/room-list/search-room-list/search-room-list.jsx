import React, { useCallback, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import IOSSwitch from '../switch/switch';
import {switchHeaderNotification, switchNotificationType} from '../../../../redux/actions/notification-actions'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import NotificationsOffOutlinedIcon from '@material-ui/icons/NotificationsOffOutlined';

const SearchRoomList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {notificationWithNumber, headerNotification} = useSelector(state => state.notification)

  const handleChange = event => {
    let type = localStorage.getItem("notificationType");
    localStorage.setItem("notificationType", type === "withNumber" ? "withoutNumber" : "withNumber");
    dispatch(switchNotificationType());
  };

  const onBellClick = () => {
    let type = localStorage.getItem("headerNotification");
    localStorage.setItem("headerNotification", type === "display" ? "none" : "display");
    dispatch(switchHeaderNotification());
  }

  return (
    <div className="search">
      <Paper component="form" className={classes.root}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase className={classes.input} placeholder="SEARCH" inputProps={{ 'aria-label': 'search' }} />
      </Paper>
      <IOSSwitch checked={notificationWithNumber} onChange={handleChange} name="checkedA" className={{root: classes.switchButton}}/>
      <IconButton classes={{root: classes.notificationsButton}} onClick={onBellClick}>
        {headerNotification ? <NotificationsNoneOutlinedIcon/> : <NotificationsOffOutlinedIcon/>}
      </IconButton>
    </div>
  );
};

export default SearchRoomList;
