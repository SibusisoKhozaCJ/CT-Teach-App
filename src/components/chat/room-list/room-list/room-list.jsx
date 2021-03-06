import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';

import { enterChatRoom } from '../../../../redux/actions/chat-action';
import useStyles from './styles';

const RoomList = React.memo(({ rooms }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { notificationByRooms, notificationWithNumber } = useSelector(state => state.notification)

  const selectRoomHandler = useCallback(
    (idRoom, name) => () => {
      dispatch(enterChatRoom(idRoom, name));
    },
    [],
  );



  return (
    <div className="room-list-rooms">
      <List dense className={classNames('list-of-messages', classes.root)}>
        {rooms.map(room => {
          const labelId = `checkbox-list-secondary-label-${room.name}`;
          return (
            <ListItem key={room.idRoom} button divider onClick={selectRoomHandler(room.idRoom, room.name)}>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${room.name + 1}`}
                  className={classes.avatar}
                >
                  {String.fromCodePoint(parseInt(room.emojiCode.match(/\d+/i)))}
                </Avatar>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${room.name}`} />
              <ListItemSecondaryAction>
                <Badge badgeContent={notificationWithNumber ? notificationByRooms[room.idRoom] : null} classes={{ badge: classes.customBadge }} invisible={!notificationByRooms[room.idRoom]}/>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
});

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RoomList;
