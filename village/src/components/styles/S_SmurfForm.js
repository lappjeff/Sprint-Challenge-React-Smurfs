import styled from 'styled-components'

const AddSmurfForm = styled.form `
  height: 500px;
  width: 50%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  background:  linear-gradient(to right, rgba(246,246,246,1) 0%, rgba(246,246,246,1) 0%, rgba(34,76,227,1) 0%, rgba(129,151,222,1) 0%, rgba(34,76,227,1) 100%);
`
const SmurfButton = styled.button `
  height: 17%;
  width: 75%;
  margin: 0 auto;
  border-radius: 5px;
  background: white;
  border: none;

`

const SmurfInput = styled.input `
  height: 13%;
  width: 50%;
  margin: 0 auto;
  border: none;
  text-align: center;
  font-size: 18px;
  border-radius: 5px;

  &:hover {
    border-bottom: 3px solid #E3D900;
  }
`
export { AddSmurfForm, SmurfButton, SmurfInput }
