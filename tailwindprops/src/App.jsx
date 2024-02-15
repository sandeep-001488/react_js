import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Intro from './components/intro'

function App() {
  const [count, setCount] = useState(0)

  let myObj={

    userName:"sandeep",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TAilWind Test</h1>
     
{/* <Card  channel="sandeepCode" someObj={myObj} /> we can pass  the value of any object like this */}
<Card  channel="SandeepCode" btnText='Visit me' />
<Card  channel="Sandeep" btnText='Visit me' />
 <Intro/>

    </>
  )
}

export default App
