import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

import {HashRouter} from 'react-router-dom'

import Header from './components/Header/Header'

import mainRoutes from './routers/mainRouter'

class App extends Component {


  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {mainRoutes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
