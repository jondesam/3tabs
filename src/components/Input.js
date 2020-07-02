import React, { useContext } from 'react'
import Contexts from '../Contexts'

const Input = () => {
  const {
    userName,
    animalName,
    onClickName,
    onClickAnimal,
    onChangeName,
    onChangeAnimal,
  } = useContext(Contexts)

  return (
    <div className='container'>
      <form className='contactform field' onSubmit={onClickName}>
        <div className='d-flex justify-content-center '>
          <input
            className='form-control w-50 mb-1'
            type='text'
            placeholder="What's your Name?"
            onChange={(e) => {
              onChangeName(e)
            }}
          />
          <button
            className='btn btn-outline-primary mb-1 ml-1'
            disabled={userName.length > 2 ? false : true}
            type='button'
            onClick={onClickName}
          >
            Submit
          </button>
        </div>
        {userName.length > 2 || userName.length === 0 ? null : (
          <p className=''>
            {' '}
            <small>Must be at least 3 characters long</small>
          </p>
        )}

        <div className='d-flex justify-content-center'>
          <input
            className='form-control w-50'
            type='text'
            placeholder="What's your favorite Animal?"
            onChange={(e) => {
              onChangeAnimal(e)
            }}
          />
          <button
            className='btn btn-outline-primary ml-1'
            type='button'
            disabled={animalName.length > 1 ? false : true}
            onClick={onClickAnimal}
          >
            Submit
          </button>
        </div>
        {animalName.length > 1 || animalName.length === 0 ? null : (
          <p className=''>
            {' '}
            <small>Animal name must be at least 2 characters long</small>
          </p>
        )}
      </form>
    </div>
  )
}

export default Input
