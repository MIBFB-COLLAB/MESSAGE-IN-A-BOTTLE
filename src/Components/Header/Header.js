import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <h1> Welcome to Message in a Bottle </h1>
      <button className="story-submit">Submit a story</button>
    </header>
  );
};

export default Header;
