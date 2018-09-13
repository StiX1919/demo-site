import React, { Component } from 'react';
import './Landing.css';

import axios from 'axios'
class Landing extends Component {

  async userLogin() {
    await axios.post('/api/routeUpdate', {path: '/Home'})
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

export default Landing;
