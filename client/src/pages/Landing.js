import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

/*import styled from 'styled-components'
const Button = styled.button`
    background: red;
`*/

const Landing = () => { 
  const {user} = useAppContext()
  return (
    <React.Fragment>
      {user && <Navigate to='/'/>}
    <>
      <h4>Virginia Place Happenings!</h4>
      <h3>Having a party or shower; need a sitter?  Tell your neighbors about it!</h3>
      <Link to='/register'>Login/Register</Link>
    </>
    </React.Fragment>
  )
}

export default Landing