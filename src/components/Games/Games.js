import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import GamesRouter from '../../routers/gamesRouter'

import axios from 'axios'
class Games extends Component {
    constructor(){
        super()
        this.state = {
            links: ['MegaRPG']
        }
    }
    userLogin() {
        window.location.href= 'http://localhost:3001/api/login'
    }

  render() {
    let navLinks = this.state.links.map(link => {
        return (
            <Link to={`/games/${link}`}><h4 className='nav-link'>{link}</h4></Link>
        )
    })
    return (
      <div>
        <h1>Games</h1>
        <button onClick={() => this.userLogin()} >Login</button>
        {navLinks}
        {GamesRouter}
      </div>
    );
  }
}

export default Games;
