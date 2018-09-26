import React, { Component } from 'react';
import './Landing.css';

import axios from 'axios'
class MegaRPG extends Component {

  //build function that checks for user on session. Redirect to character select

  userLogin() {
    window.location.href= 'http://localhost:3001/api/login'
  }

  render() {
    return (
      <div>
        <h1>MEGA RPG</h1>
        <button onClick={() => this.userLogin()} >Login</button>
      </div>
    );
  }
}

export default MegaRPG;
