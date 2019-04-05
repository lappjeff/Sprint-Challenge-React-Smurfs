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
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
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
