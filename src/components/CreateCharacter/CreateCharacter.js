import React, { Component } from 'react';
import axios from 'axios'
class CreateCharacter extends Component {

  async userLogin() {
    await axios.post('/api/routeUpdate', {path: '/CreateCharacter'})
    window.location.href= 'http://localhost:3001/api/login'
  }

  render() {
    return (
      <div>
        <h1>Create Character</h1>
        <button onClick={() => this.userLogin()} >Login</button>
      </div>
    );
  }
}

export default CreateCharacter;