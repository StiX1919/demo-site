import React, { Component } from 'react';
import './App.css';

import {Provider} from 'react-redux'

import Header from './components/Header/Header'
import Footer from './components/portfolio/Footer/Footer'

import mainRoutes from './routers/mainRouter'
import GamesRouter from './routers/gamesRouter'

import store from './store'

class App extends Component {


  render() {
    console.log(window.location.pathname)
    return (
      <Provider store={store}>
          <div className="App">
            <Header />
            {mainRoutes}
            {GamesRouter}
            {!window.location.pathname.includes('/Games') &&
          
            <Footer />
            }
          </div>
      </Provider>
    );
  }
}

export default App;


//working on database today