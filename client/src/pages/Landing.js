import React from 'react';
import { Link } from 'react-router-dom';

/*import styled from 'styled-components'
const Button = styled.button`
    background: red;
`*/

const Landing = () => { 

  return (
    <>
      <h4>Virginia Place Happenings!</h4>
      <h3>Having a party or shower; need a sitter?  Tell your neighbors about it!</h3>
      <Link to='/register'>Login/Register</Link>
    </>
  )
}

export default Landing