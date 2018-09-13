import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import Header from './components/Header/Header'

import mainRoutes from './routers/mainRouter'

import store from './store'

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {mainRoutes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
