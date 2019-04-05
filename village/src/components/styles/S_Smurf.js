import styled from 'styled-components'


const SmurfCard = styled.div `
  background: #224de3;
  color: white;
  font-size: 20px;
  width: 49%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0 ;
  margin: 4px;
  box-shadow: 0px 3px 12px -2px rgba(0,0,0,1);

  strong {
    cursor: pointer;
  }


`
export { SmurfCard }
