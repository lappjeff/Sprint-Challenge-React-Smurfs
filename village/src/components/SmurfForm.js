import React, { Component } from 'react';

import axios from 'axios'

import { AddSmurfForm, SmurfButton, SmurfInput } from './styles/S_SmurfForm'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.state.name && this.state.age && this.state.height) {

      axios.post('http://localhost:3333/smurfs', {...this.state})
      .then(res => console.log('smurf submitted'))
      .catch(err => console.log('smurf could not be submitted'))

      this.setState({
        name: '',
        age: '',
        height: ''
      });
    } else {
      alert('Please fill all fields')
    }


  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <AddSmurfForm onSubmit={this.addSmurf}>
          <SmurfInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <SmurfInput
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <SmurfInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <SmurfButton type="submit">Add to the village</SmurfButton>
        </AddSmurfForm>
      </div>
    );
  }
}

export default SmurfForm;
