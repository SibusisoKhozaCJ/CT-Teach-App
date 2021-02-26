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

import { enterChatRoom } from '../../../../redux/actions/chat-action';
import useStyles from './styles';

const RoomList = ({ rooms }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
                  src={`/static/images/avatar/${room.name + 1}.jpg`}
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${room.name}`} />
              <ListItemSecondaryAction>
                <Badge badgeContent={5} classes={{ badge: classes.customBadge }} invisible={false} />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RoomList;
