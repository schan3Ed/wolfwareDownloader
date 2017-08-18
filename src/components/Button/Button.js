import React, { Component } from 'react';
// import Dropdown from '../Dropdown/Dropdown';
// import Toggle from '../Toggle/Toggle';
import '../../stores/UserConfigStore'
import './Button.css'

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    console.log(event.target.value);
    console.log('pressed button');
  }

  render() {
    console.log('rendering button');
    return (
      <div className='Button'>
        <input type="radio" id={this.props.id} name={this.props.name} onChange={this.handleChange}/>
        <label htmlFor={this.props.id} title={this.props.title}>{this.props.id}</label>
        <div className="check"></div>
      </div>
    );
  }
}

