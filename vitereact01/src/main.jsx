import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp () {
 return(
  <div>
  <h1>Custom APP !!!</h1>
</div>
 )
  
}
/*
const reactElement={
  type:'a',
  props:{
      href:'https://www.google.com',
      target:'_blank'
  },
  children:'click me to visit google'
}
*/


const anotherElement=(
  <a href="https://www.google.com" target='_blank'>Visit Google </a>
)

const reactElement=React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'click me to visit Google'
)


ReactDOM.createRoot(document.getElementById('root'))
.render(
   <React.StrictMode>
    <App/>
  </React.StrictMode>,

  //<MyApp/> // or MyApp()
  // anotherElement  // but we can't use reactElement in this way as the way it is written can't be rendered 
 // reactElement
  
)
