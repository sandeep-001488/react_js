import React from 'react'
import Header from './components/Header/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/footer'

const Layout = () => {
    return (
   <>
  <Header/>
  <Outlet/>
  <Footer/>
</>
      
    )
}

export default Layout