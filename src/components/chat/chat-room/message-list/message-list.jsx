import React from 'react';
import Moment from 'moment';
import classNames from 'classnames';

const MessageList = ({ messages, userFirstName }) =>
  messages.map(item => (
    <div key={item.key} className="MessageBox">
      {item.type === 'join' || item.type === 'exit' ? (
        <div className="ChatStatus">
          <span className="ChatDate">{Moment(new Date(item.createdAt)).format('DD/MM/YY HH:mm')}</span>
          <span className="ChatContentCenter">{item.message}</span>
        </div>
      ) : (
        <div className="ChatMessage">
          <div
            className={classNames({
              RightBubble: !item.code && item.firstname === userFirstName,
              LeftBubble: !item.code && item.firstname !== userFirstName,
              RightBubbleBlack: item.code && item.firstname === userFirstName,
              LeftBubbleBack: item.code && item.firstname !== userFirstName,
              codeBlack: item.code,
            })}
          >
            {item.firstname === userFirstName ? (
              <span className="MsgName">Me</span>
            ) : (
              <span className="MsgName">{item.firstname}</span>
            )}
            <span className="MsgDate">{Moment(new Date(item.createdAt)).format('DD/MM/YY HH:mm')}</span>
            <p>{item.message}</p>
          </div>
        </div>
      )}
    </div>
  ));

export default MessageList;
