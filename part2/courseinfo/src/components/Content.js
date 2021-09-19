import React from 'react'
import Part from './Part'

const Content = ({ courselist }) => {
  console.log(courselist);

  const total = courselist.reduce((sum, next) => sum + next.exercises, 0)

  return (
    <div>
      {courselist.map(course => <Part key={course.id} course={course} />)}
      Total of {total} exercises 
    </div>
  )
}

export default Content