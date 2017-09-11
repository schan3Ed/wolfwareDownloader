import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import { initCache } from '../store/UserConfigStore';
import './App.css';

export default class App extends Component {
  state = { cache: null };

  async componentWillMount() {
    const results = await initCache();
    this.setState({
      cache: results
    })
  }

  render() {
    if(this.state.cache) {
      return (
        <div className="App">
          <Header></Header>
          <Content cache={this.state.cache}></Content>
          <Footer></Footer>
        </div>
      );
    } else {
      return (
        <div> Loading </div>
      )
    }
  }
}
