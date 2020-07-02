import React, { useState } from 'react'
import './App.css'
import Contexts from './Contexts'
import Input from './components/Input'
import Name from './components/Name'
import Animal from './components/Animal'

function App() {
  const username = 'USERNAME'
  const animal = 'ANIMAL'
  const input = 'INPUT'

  const [userName, setName] = useState('')
  const [animalName, setAnimal] = useState('')
  const [page, setPage] = useState('INPUT')

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeAnimal = (e) => {
    setAnimal(e.target.value)
  }

  const onClickName = (e) => {
    e.preventDefault()
    setName(userName)
    setPage(username)
  }

  const onClickAnimal = (e) => {
    e.preventDefault()
    setAnimal(animalName)
    setPage(animal)
  }

  const tabClick = (value) => {
    if (value === input) {
      setPage(input)
    }
    if (value === username) {
      setPage(username)
    }
    if (value === animal) {
      setPage(animal)
    }
  }

  return (
    <div className='App'>
      <div>
        <ul className='nav nav-tabs  nav-justified  '>
          <li className='nav-item '>
            <h5
              className={
                page === input
                  ? 'nav-link text-primary'
                  : 'nav-link text-secondary'
              }
              type='button'
              onClick={() => {
                tabClick(input)
              }}
            >
              Input
            </h5>
          </li>
          <li className='nav-item'>
            <h5
              className={
                page === username
                  ? 'nav-link text-primary '
                  : 'nav-link  text-secondary'
              }
              type='button'
              onClick={() => {
                tabClick(username)
              }}
            >
              Name
            </h5>
          </li>
          <li className='nav-item'>
            <h5
              className={
                page === animal
                  ? 'nav-link text-primary'
                  : 'nav-link  text-secondary'
              }
              type='button'
              onClick={() => {
                tabClick(animal)
              }}
            >
              Animal
            </h5>
          </li>
          <Contexts.Provider
            value={{
              userName,
              animalName,
              onClickName,
              onClickAnimal,
              onChangeName,
              onChangeAnimal,
            }}
          >
            {page === input ? <Input></Input> : null}
            {page === username ? <Name></Name> : null}
            {page === animal ? <Animal></Animal> : null}
          </Contexts.Provider>
        </ul>
      </div>
    </div>
  )
}

export default App
