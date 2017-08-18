import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="toggle">
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
            <div className="inline_text">{this.props.text}</div>
          </label>
        </div>
    );
  }
}

export default Toggle;