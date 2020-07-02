import React, { useContext } from 'react'
import Contexts from '../Contexts'

const Name = () => {
  const { userName } = useContext(Contexts)

  return (
    <div className='container field'>
      {userName ? (
        <h2>Welcome, {userName}!</h2>
      ) : (
        <h2>Please submit your name </h2>
      )}
    </div>
  )
}

export default Name
