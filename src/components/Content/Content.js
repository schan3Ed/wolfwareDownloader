import React, { Component } from 'react';
import Button from '../Button/Button';
// import { storageCache } from '../../background.js';
import './Content.css'

export default class Content extends Component {

  buttonConfigs = [{id:'Overwrite', title: 'a'}, {id:'Prompt', title: 'b'}, {id:'Default', title: 'c'}];

  render() {
    // console.log(storageCache);
    return (
      <div className='Content'>
        <h2>File conflict action:</h2>
        <form action=''>
          {this.buttonConfigs.map((button) => {
            //label value 
            return <Button name={'config'} key={button.id} id={button.id} title={button.title} defaultChecked={this.props.cache.config.toUpperCase() === button.id.toUpperCase()}></Button>
          })}
        </form>
      </div>
    );
  }
}

