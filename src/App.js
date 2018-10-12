import React, { Component } from 'react';
import './App.css';

import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import mainRoutes from './routers/mainRouter'
import GamesRouter from './routers/gamesRouter'

import store from './store'

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {mainRoutes}
            {GamesRouter}
            <Footer />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;


//working on database today