import { useState,useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPasssword] = useState("")

  // use ref hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


    
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&**[]{}+=~`"

    for(let i=1;i<length;i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPasssword(pass)
    

  },[length,numberAllowed,charAllowed,setPasssword])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select(); // to show that it is copied2
  passwordRef.current?.setSelectionRange(0,9);
  window.navigator.clipboard.writeText(password) // to copy password on clip
},[password])

  useEffect(()=>{
    passwordGenerator()
   },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md h-full mx-auto shadow-md
    rounded-lg px-5 my-5 text-orange-600 bg-gray-600">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3' 
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 px-2 py-2 shrink-0'>Copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" 
        min={6}
        max={50}
        value={length}
        id='length'
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="length">Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)}}
           />
           <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev)}}
           />
           <label htmlFor="charInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
