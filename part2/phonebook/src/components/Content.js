import React from 'react';
import Person from './Person'

const Content = ({persons, newFilter, handleDelete}) => (
  <div>
    {
      persons.filter(
        person => person.name.toLowerCase().startsWith(newFilter.toLowerCase())
      ).map(
        (person, i) => (
          <p key={i}>
            <Person key={i} person={person} />
            <button onClick={handleDelete(person)} type="submit">delete</button>
          </p>
        )
      )
    }
  </div>
)

export default Content