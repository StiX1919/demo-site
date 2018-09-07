import React, { Component } from 'react';
import logo from '../../logo.svg';
import axios from 'axios'
import './Header.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            menu: false,
            links: ['Home', 'About', 'Contact']
        }
        this.openMenu = this.openMenu.bind(this)
    }

    openMenu() {
        this.setState({menu: !this.state.menu})
    }

  render() {
    let navLinks = this.state.links.map(link => {
        return (
            <h4 className='nav-link'>{link}</h4>
        )
    })
    return (
      <div className='App-header'>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <div className="App-title">{navLinks}</div>
                <img className='hamBar' src='https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png' alt='MenuBar'onClick={() => this.openMenu()}/>
                <div className={this.state.menu ? 'dropdownMenu' : 'menu-Closed'}>
                    {navLinks}
                </div>
            </div>
      </div>
    );
  }
}

export default App;