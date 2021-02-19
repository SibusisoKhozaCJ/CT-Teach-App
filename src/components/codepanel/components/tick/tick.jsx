import React from 'react';

import './tick.css';

function Tick({ size }) {
  return (
    <svg
      className="checkmark"
      style={{ width: size, height: size }}
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="checkmark__circle"
        cx="26"
        cy="26"
        fill="none"
        r="25"
      />
      <path
        className="checkmark__check"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
        fill="none"
      />
    </svg>
  );
}

export default Tick;
