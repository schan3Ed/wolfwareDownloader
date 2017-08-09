import React, { Component } from 'react';
import logo from './wolf.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <div className="header-text">Wolfware DL</div>
      </div>
    );
  }
}

export default Header;