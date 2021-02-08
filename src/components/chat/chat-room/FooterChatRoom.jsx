import React from 'react';

const FooterChatRoom = ({ submitMessage, onChange, value }) => {
  return (
    <footer className="ChatFooter">
      <form className="MessageForm" onSubmit={submitMessage}>
        <input
          type="test"
          name="message"
          className="text-message"
          placeholder="Type a message here"
          value={value}
          onChange={onChange}
        />
        {/*<SendIcon type="submit" className='submit'/>*/}
        <button type="submit" />
      </form>
    </footer>
  );
};

export default FooterChatRoom;
