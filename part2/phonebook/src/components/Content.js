import React from 'react';
import Person from './Person'

const Content = ({persons, newFilter}) => (
  <div>
    {
      persons.filter(
        person => person.name.toLowerCase().startsWith(newFilter.toLowerCase())
      ).map(
        (person, i) => <Person key={i} person={person} />
      )
    }
  </div>
)

export default Content