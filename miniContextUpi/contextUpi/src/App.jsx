import { useState } from 'react'
import './App.css'
import UserContextprovider from './Context/UserContextProvider'
import { Login } from './components/Login'
import { Profile } from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
     <UserContextprovider>
     <h1 className=''>Hello react with mini Context Upi</h1>
     <Login/>
     <Profile/>
     </UserContextprovider>
  
  )
}

export default App
