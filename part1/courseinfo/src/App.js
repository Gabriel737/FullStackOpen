import React from 'react'

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

const Header = (props) => (
  <h1>
    {props.course.name}
  </h1>
)

const Content = (props) => (
  <div>
    <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
    <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
    <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
  </div>
)

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)


const Total = (props) => {
  let total = 0

  props.course.parts.forEach(e => {
    total += e.exercises
  })

  return(
  <p>
    Number of exercises {total}
  </p>
  )
}

export default App