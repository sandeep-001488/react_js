import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // don't use const just below part
  let [counter,apnaCounter]=useState(15) // default value

  
  //let counter=15
   const addValue=()=>{
    {/*
   counter =counter+1;   // but  doing this only , will not work so we need to use hooks which will do a particular work
   apnaCounter(counter);  
    */}
    apnaCounter(counter+1);
    apnaCounter(counter+1);
    apnaCounter(counter+1);// NOTE-> riting multiple same lines will not change the value in one click
   
    // But same thing can be done using call back fn
  {/*
    apnaCounter((myCounter)=>myCounter+1)
    apnaCounter((myCounter)=>myCounter+1)
    apnaCounter((myCounter)=>myCounter+1)
    apnaCounter((myCounter)=>myCounter+1)
  */}
  }
 const count=document.getElementById('count')
   const subtractValue=()=>{
    if(counter<0){
    count.innerText="counter is less than 0"
    return;
    }
   apnaCounter(counter-1)
   
   }
   

  return (
    <>
     <h1>Chai or React</h1>
     <h2>Counter Value: {counter}</h2>
      <h2 id='count'>Message</h2>
     <button onClick={addValue}>Add value</button><br />
     <button onClick={subtractValue}>Decrease value</button>
    </>
  )
}

export default App
