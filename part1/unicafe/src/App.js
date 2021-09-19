import React, { useState } from 'react'

const Statistics = ({ numbers }) => {
  let count = numbers.good + numbers.neutral + numbers.bad
  let total = numbers.good * 1 + numbers.bad * -1
  let average = total / count
  let positive = 100 * numbers.good / count

  if(count === 0) {
    return (
      <div>
      <h1>Statistics</h1>
      <p>No feedback given yet!</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Stat text='Good:' value={numbers.good} />
          <Stat text='Neutral:' value={numbers.neutral} />
          <Stat text='Bad:' value={numbers.bad} />
          <Stat text='All:' value = {count} />
          <Stat text='Average:' value = {average} />
          <Stat text='Positive (%):' value = {positive} />
        </tbody>
      </table>
    </div>
  )
}

const Stat = ({ text, value }) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good+1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral+1)} text='Neutral' />
      <Button handleClick={() => setBad(bad+1)} text='Bad' />
      <Statistics numbers={{
        good: good,
        neutral: neutral,
        bad: bad
      }} />
    </div>
  )
}

export default App