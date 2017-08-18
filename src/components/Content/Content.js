import React, { Component } from 'react';
import Button from '../Button/Button';
// import { storageCache } from '../../background.js';
import './Content.css'

export default class Content extends Component {
  render() {
    // console.log(storageCache);
    return (
      <div className='Content'>
        <h2>File conflict action:</h2>
        <form action=''>
          <Button name={'config'} id={'Overwrite'} title={'Overwrite the original file'}></Button>
          <Button name={'config'} id={'Prompt'} title={'Choose what to rename the conflicting file'}></Button>
          <Button name={'config'} id={'Default'} title={'Chrome default (adds a number to the end of the file)'}></Button>
        </form>
      </div>
    );
  }
}

