import styled from 'styled-components'

const NavBar = styled.nav `
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  padding: 10px;
  background: #224de3

  a {
    text-decoration: none;
    color: white;
  }

  .active {
    color: #e3d900;
  }
`


export { NavBar, }
