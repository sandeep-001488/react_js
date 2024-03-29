import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

export const Profile = () => {
   const {User}=useContext(UserContext)

   if(!User) return <div>please Login</div>

   return <div>Welcome {User.username}</div>
}
