import React from 'react';

import PropTypes from 'prop-types'

import { SmurfCard } from './styles/S_Smurf'

const Smurf = props => {
  return (
    <SmurfCard>
      <h2>{props.name} </h2>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <strong onClick={() => props.deleteSmurf(props.id)}>X</strong>

    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

Smurf.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  height: PropTypes.string,
}
export default Smurf;
