//Header.js
import React from 'react';
import logo from '../assets/logo.jpg'; // Adjust the path to your logo image

const Header = ({ stackId, crashId, crashDateTime, crashType }) => (
  <header className="header">
    <div className="left-section">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="app-name" style={{ textDecoration: "underline" }}>FlashBack</h1>
    </div>
    <div className="middle-section">
      <ul className='menu'>
      <li><b><p className='h'>Stack ID</p> <p>73743438</p></b></li>
      <li><b><p className='h'>Crash ID </p> <p>491440377</p></b></li>
      <li><b><p className='h'>Crash Date and Time</p> <p>Tue-May 28 2024-02:07</p></b></li>
      <li><b><p className='h'>Crash Type </p> <p>OnForceQuit</p></b></li>
      </ul>
    </div>
    <nav className="right-section">
      <button className="close-button">Close</button>
    </nav>
  </header>
);
// {stackId} {crashId}  {crashDateTime} {crashType}
export default Header;
