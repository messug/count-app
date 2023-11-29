import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

  function App() {
  const now = (new Date().toLocalTimeString());

  const [count, setCount] = useState(0)
  const[time, setTime]= useState(now)

function updatedTime(){
  const newTime = (new Date().toLocalTimeString());
  setTime(newTime)
}  

function increase() {
  setCount(count + 1);
}  
 function decrease() {
  setCount(count - 1);
 }
  return (
    <>
      <div className='app-container'>
       <h1>{count}</h1>
       <button  className='logo' onClick={increase}>+</button>
       <button className='logo' onClick={decrease}>-</button>
      </div>
      <div>
        <h1>{time}</h1>
        <button onClick={updatedTime}> Get Time</button>
      </div>
     </>
  )
    }

export default App;
