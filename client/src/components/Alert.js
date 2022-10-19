import React from 'react'
import { useAppContext } from '../context/appContext'

const Alert = () => {
  const {alertText} = useAppContext();
  return (
    <div>{alertText}</div>
  )
}

export default Alert