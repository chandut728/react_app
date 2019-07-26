import './App.css'
import React, {useState} from 'react'



import Name from './name'
import Image from './image'



function App () {
  const [count, setCount]=useState(0);
  function handleAlertClick(){
    setTimeout(()=>{
      alert('You Click On: ' + count);
    }, 3000)
  }

    return <div className="App">
      <Name/>
      <Image/>
      <h1>React First App</h1>
      <p>you click <br/>{count} <br/> times</p>
      <button className="b1" onClick={()=>setCount(count+1)}>Increment</button>
      <button className="b2" onClick={()=>setCount(count-1)}>Decrement</button>
      <button className="b3" onClick={()=>setCount(count===0)}>Reset</button>
      <br/>
      <button className="b4" onClick={handleAlertClick}>Submit</button>
    </div>
}

export default App
