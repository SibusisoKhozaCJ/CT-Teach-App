import React from 'react';

const Header = ({ exitChat }) => {
  return (
    <header className="chat-header">
      <button onClick={exitChat}>EXIT</button>
    </header>
  );
};

export default Header;
