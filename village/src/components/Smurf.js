import React from 'react';

import { SmurfCard } from './styles/S_Smurf'
const Smurf = props => {
  return (
    <SmurfCard>
      <h2>{props.name}</h2>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
