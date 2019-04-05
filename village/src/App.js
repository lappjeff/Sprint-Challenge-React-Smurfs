import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom'
import axios from 'axios'

import { withRouter } from 'react-router-dom'

import './App.css';
import { NavBar, } from './components/styles/S_NavBar'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => console.log(err))
  }


  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => 'Smurf could not be removed')
  }

  updateData = data => {
    this.setState({ smurfs: data})
  }

  render() {
    return (
      <div className="App">

        <NavBar>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/smurf-form'>Add A Smurf</NavLink>
          <NavLink to='/smurf-update-form'>Update A Smurf</NavLink>
        </NavBar>

        <Route exact path='/' render={props => (
          <Smurfs
            smurfs={this.state.smurfs}
            deleteSmurf={this.deleteSmurf} />
        )}/>

        <Route path='/smurf-form' render={props => (
          <SmurfFormWithRouter
            updateData={this.updateData}
          />
        )}/>

        <Route path='/smurf-update-form' render={props => (
          <SmurfFormWithRouter smurfs={this.state.smurfs}/>
        )}/>

      </div>
    );
  }
}

const SmurfFormWithRouter = withRouter(props => <SmurfForm {...props} />)
export default App;
