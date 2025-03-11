import { useState } from 'react'
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const Display = (props) => {
  return (
    <div>
      {props.name} {props.counter}
    </div>
  )
}

const Statistics  = ({good,neutral,bad}) => {

  const getTotal = function () {
    return good + neutral + bad;
  }

  const getAverage = function (){
    return (good*1  + bad*(-1))/getTotal();
  }

  const getPositive = function (){
    return (good / getTotal())*100;
  }
  if (getTotal() > 0){
    return (
      <div>
        <h1>statistics</h1>
        <Display name="good" counter={good}/>
        <Display name="neutral" counter={neutral}/>
        <Display name="bad" counter={bad}/>
        <div>all {getTotal()}</div>
        <div> average {getAverage()}</div>
        <div> positive {getPositive()} %</div>
      </div>
    )
  }
  return(
    <h3>No feedback given</h3>
  )
  
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        onClick={increaseGood}
        text = "Good"
      />

      <Button
        onClick={increaseNeutral}
        text = "Neutral"
      />

      <Button
        onClick={increaseBad}
        text = "Bad"
      />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App