/* eslint-disable react/prop-types */
import { useState } from 'react'

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

function StaticticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function Statictics({ good, neutral, bad, total, average, positive }) {
  if (!total) return <p>No feedback given</p>

  return (
    <table>
      <tbody>
        <StaticticLine text='good' value={good} />
        <StaticticLine text='neutral' value={neutral} />
        <StaticticLine text='bad' value={bad} />
        <StaticticLine text='all' value={total} />
        <StaticticLine text='average' value={average} />
        <StaticticLine text='positive' value={positive} />
      </tbody>
    </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState('0 %')

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    const newTotal = newGood + neutral + bad
    setTotal(newTotal)
    const newAverage = (newGood - bad) / newTotal
    setAverage(newAverage)
    const newPositive = `${(newGood * 100) / newTotal} %`
    setPositive(newPositive)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newTotal = good + newNeutral + bad
    setTotal(newTotal)
    const newAverage = (good - bad) / newTotal
    setAverage(newAverage)
    const newPositive = `${(good * 100) / newTotal} %`
    setPositive(newPositive)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newTotal = good + neutral + newBad
    setTotal(newTotal)
    const newAverage = (good - newBad) / newTotal
    setAverage(newAverage)
    const newPositive = `${(good * 100) / newTotal} %`
    setPositive(newPositive)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h2>statistics</h2>
      <Statictics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App
