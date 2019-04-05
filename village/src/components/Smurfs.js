import React, { Component } from 'react';

import Smurf from './Smurf';

import { SmurfContainer } from './styles/S_Smurfs'
class Smurfs extends Component {
  render() {
    return (
      <>
      <div>
        <h1>Smurf Village</h1>
      </div>

      <SmurfContainer>
        {this.props.smurfs.length === 0 ? <h1>Gargamel chased the smurfs away!</h1> : null}
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
            deleteSmurf={this.props.deleteSmurf}
            />
          );
        })}

      </SmurfContainer>
      </>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
