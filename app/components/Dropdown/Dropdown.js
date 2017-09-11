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
        <div className="dropdown-content btn-group">
          <form action="">
            <input type="radio" name="config" value="male"/> Male<br/>
            <input type="radio" name="config" value="female"/> Female<br/>
            <input type="radio" name="config" value="other"/> Other 
          </form>
        </div>
      </div>
    );
  }
}

export default Dropdown;