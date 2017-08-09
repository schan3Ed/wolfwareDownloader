import React, { Component } from 'react';
import './Dropdown.css';
import 'font-awesome/css/font-awesome.min.css';

class Dropdown extends Component {
  render() {
    return (
      <div className="dropdown">
        <button className="dropdown-btn" tabIndex="-1">
          <i className="fa fa-cog icon" aria-hidden="true"></i>
          Settings
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    );
  }
}

export default Dropdown;