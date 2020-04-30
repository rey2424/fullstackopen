import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({ handleClick, text}) => (

<button onClick={handleClick}>{text}</button>

)

const Statistic = ({text, value}) => {
  return(
   <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  

  const setG = () => setGood(good + 1)
  const setN = () => setNeutral(neutral + 1)
  const setB = () => setBad(bad + 1)

  const all = good + neutral + bad 
  
  let avg = (good - bad) / all
  let pos = (good / all) * 100
  if(all === 0) {
    avg = 0
    pos = 0
  }



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setG} text='good' />
      <Button handleClick={setN} text='neutral' />
      <Button handleClick={setB} text='bad' />
      <h1>statistics</h1>
      <table>   
        <tbody>  
        <Statistic text="good" value ={good} />
        <Statistic text="neutral" value ={neutral} />
        <Statistic text="bad" value ={bad} />
        <Statistic text="all" value ={all} />
        <Statistic text="average" value ={avg} />
        <Statistic text="positive" value ={pos + '%'} />
        </tbody> 
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)