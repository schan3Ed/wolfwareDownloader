import React, { Component } from 'react';
// import Dropdown from '../Dropdown/Dropdown';
// import Toggle from '../Toggle/Toggle';
import { updateConfig } from '../../stores/UserConfigStore'
import './Button.css'

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // TODO: Schema refactor
    updateConfig(event.target.id.toLowerCase());
  }

  render() {
    return (
      <div className='Button'>
        <input 
          type="radio" 
          id={this.props.id} 
          name={this.props.name} 
          onChange={this.handleChange}
          defaultChecked={this.props.defaultChecked}/>
        <label htmlFor={this.props.id} title={this.props.title}>{this.props.title}</label>
        <div className="check"></div>
      </div>
    );
  }
}

