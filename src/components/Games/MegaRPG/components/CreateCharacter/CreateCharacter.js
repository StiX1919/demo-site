import React, { Component } from 'react';
import axios from 'axios'


class CreateCharacter extends Component {


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