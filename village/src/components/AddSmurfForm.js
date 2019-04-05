import React from 'react'

import { AddSmurfForm, SmurfButton, SmurfInput } from './styles/S_SmurfForm'

const AddSmurf = props => {

  const { name, age, height } = props.values
  return (
    <AddSmurfForm onSubmit={props.addSmurf}>
      <h2>Add A Smurf</h2>
      <SmurfInput
        onChange={props.handleInputChange}
        placeholder="name"
        value={name}
        name="name"
      />
      <SmurfInput
        onChange={props.handleInputChange}
        placeholder="age"
        value={age}
        name="age"
      />
      <SmurfInput
        onChange={props.handleInputChange}
        placeholder="height"
        value={height}
        name="height"
      />
      <SmurfButton type="submit">Add to the village</SmurfButton>
    </AddSmurfForm>
  )
}

export default AddSmurf
