import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    height: '500px',
    overflow: 'auto',
    '& span': {
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('xs')]: {
      height: '570px',
      '& span': {
        fontSize: '16px !important',
      },
    },
  },
  avatar: {
    background: '#43D4DD',
    border: '2px solid #e83e8c',
  },
  dots: {
    color: '#43D4DD',
  },
  customBadge: {
    backgroundColor: '#76dc37',
    color: 'white',
  },
}));

const RoomList = ({ rooms, onEnter }) => {
  const classes = useStyles();

  return (
    <List dense className={classNames('list-of-messages', classes.root)}>
      {rooms.map(room => {
        const labelId = `checkbox-list-secondary-label-${room.name}`;
        return (
          <ListItem key={room.idRoom} button divider onClick={() => onEnter(room.idRoom, room.name)}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${room.name + 1}`}
                src={`/static/images/avatar/${room.name + 1}.jpg`}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${room.name}`} />
            <ListItemSecondaryAction>
              <Badge
                badgeContent={room.unreadMessages === 0 ? null : room.unreadMessages}
                classes={{ badge: classes.customBadge }}
                invisible={false}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEnter: PropTypes.func.isRequired,
};

export default RoomList;
