import React, { useContext } from 'react'
import Contexts from '../Contexts'

const Animal = () => {
  const { animalName } = useContext(Contexts)

  return (
    <div className='container field'>
      {animalName ? (
        <h2>{animalName} is lovely!</h2>
      ) : (
        <h2>Please submit your favorite animal</h2>
      )}
    </div>
  )
}

export default Animal
