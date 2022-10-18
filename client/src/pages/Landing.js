import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    const clicked = () => {
        console.log('you clicked the button')
    }

  return (
    <>
        <h4>Virginia Place Happenings!</h4>
        <h3>Having a party or shower; need a sitter?  Tell your neighbors about it!</h3>
        <button type='button' onClick={clicked}>Register/Login</button>
    </>
  )
}

export default Landing