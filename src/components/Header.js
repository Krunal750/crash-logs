import React from 'react';
import logo from '../assets/logo.jpg'; // Adjust the path to your logo image

const Header = ({ stackId, crashId, crashDateTime, crashType }) => (
  <header className="header">
    <div className="left-section">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="app-name">FlashBack</h1>
    </div>
    <div className="middle-section">
      <ul>
      <li>Stack ID {stackId}</li>
      <li>Crash ID {crashId}</li>
      <li>Crash Date and Time {crashDateTime}</li>
      <li>Crash Type {crashType}</li>
      </ul>
    </div>
    <nav className="right-section">
      <button className="close-button">Close</button>
    </nav>
  </header>
);

export default Header;
