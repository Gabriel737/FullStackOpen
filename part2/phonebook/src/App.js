import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Content from './components/Content'
import contactService from './services/ContactService'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)

  useEffect(() => contactService.getAll().then(
      response => setPersons(response)), 
  [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if(persons.filter(person => person.name === newName).length !== 0) {
      window.alert(`${newName} has already been entered in the phonebook!`)
    } else {

      const newPerson = {name: newName, number: newNumber}

      contactService.create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h2>Add a new entry </h2>
      <form>
        <div>
          Name: 
          <input 
            value={newName} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          Phone number:
          <input 
            value={newNumber} 
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Content persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App