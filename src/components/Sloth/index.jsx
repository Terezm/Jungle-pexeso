import React, { useEffect, useState } from 'react';
import './style.css';

export const Sloth = ({ message, direction }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (message) {
      setActive(true);
      const timeout = setTimeout(() => {
        setActive(false);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [message]);

  return (
    <div
      className={`sloth-container sloth-container-${direction} ${
        active ? 'sloth-container-active' : ''
      }`}
    >
      <img
        className={`sloth-img sloth-img-${direction}`}
        src="/output.png"
        alt="sloth"
      />
      <div className={`bubble bubble-${direction}`}>{message}</div>
    </div>
  );
};
