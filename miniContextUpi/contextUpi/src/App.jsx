
import './App.css'

import UserContextprovider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'



function App() {
 

  return (
   
     <UserContextprovider>
     <h1 >Hello react with mini Context Upi</h1>
   <Login/>
   <Profile/>
     </UserContextprovider>
  
  )
}

export default App
