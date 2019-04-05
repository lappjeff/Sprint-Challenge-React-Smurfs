import React, { Component } from 'react';

import axios from 'axios'

import AddSmurf from './AddSmurfForm'
import CurrentSmurfs from './CurrentSmurfs'

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

    if (this.state.name && this.state.age && this.state.height) {

      axios.post('http://localhost:3333/smurfs', {...this.state})
        .then(res => {
          console.log('smurf submitted')
          this.props.updateData(res.data)
        })
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
        {this.props.match.path === '/smurf-form' ?
          <AddSmurf
            handleInputChange={this.handleInputChange}
            addSmurf={this.addSmurf}
            values={this.state}
          /> :
          <CurrentSmurfs
            handleInputChange={this.handleInputChange}
            addSmurf={this.addSmurf}
            values={this.state}
          />}
      </div>
    );
  }
}

export default SmurfForm;
