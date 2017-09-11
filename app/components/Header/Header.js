import React, { Component } from 'react';
import logo from './wolf.png';
import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <div className={style.text}>Wolfware DL</div>
      </div>
    );
  }
} 

export default Header;
