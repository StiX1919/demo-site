import React, { Component } from 'react';
import logo from '../../logo.svg';
import axios from 'axios'

import { Link } from 'react-router-dom'
import './Header.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            menu: null,
            links: ['Home', 'Games']
        }
        this.openMenu = this.openMenu.bind(this)
    }

    openMenu(thing) {
        this.setState({menu: thing})
    }
//hello

    

  render() {
      
    let navLinks = this.state.links.map((link, index) => {
        return (
            <Link to={`/${link}`}>
                <h4 className='nav-link'>
                    {link}
                </h4>
            </Link>
        )
    })

    return (
      <div className='App-header'>
            <img src='http://www.logodust.com/img/free/logo26.png ' className="App-logo" alt="logo" />
            <div className="App-title" onClick={() => this.openMenu((this.state.menu === null ? true : !this.state.menu))}>
                <h1>Links</h1>
                    
                

                <img className='hamBar' src='https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png' alt='MenuBar' onClick={() => this.openMenu((this.state.menu === null ? true : !this.state.menu))}/>
                <div className={this.state.menu ? 'dropdownMenu' : 'menu-Closed'}>
                    {navLinks}
                </div>
            </div>
            <div className={this.state.menu === false ? 'art-links closing' : this.state.menu === true ? 'art-links opening' : 'art-links' }
            >
                {navLinks}
            </div>
      </div>
    );
  }
}
export default App;