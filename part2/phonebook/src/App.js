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

  const handleDelete = (id) => {
    return () => {
      if(window.confirm('Are you sure you would like to delete this user?')) {
        setPersons(persons.filter(person => person.id !== id))
        contactService.remove(id)
      }
    }
  }

  const handleSubmit = (event) => {

    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    const result = persons.find(person => person.name === newName)

    if(result) {
      if(window.confirm(`${result.name} is already a contact. Would you like to update his phone number?`)) {
        contactService.update(result.id, newPerson).then(returnedPerson => {
          setPersons(persons.map(person => person.id === result.id ? newPerson : person))
        })
      }
    } else {
      contactService.create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    }

    setNewName('')
    setNewNumber('')
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
      <Content persons={persons} newFilter={newFilter} handleDelete={handleDelete} />
    </div>
  )
}

export default App