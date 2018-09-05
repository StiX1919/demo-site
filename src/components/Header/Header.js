import React, { Component } from 'react';
import logo from '../../logo.svg';
import axios from 'axios'
import './Header.css';

class App extends Component {


  render() {
    return (
      <div className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <img className='hamBar' src='https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png' alt='MenuBar'/>
      </div>
    );
  }
}

export default App;