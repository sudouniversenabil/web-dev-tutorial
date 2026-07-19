import React from 'react'
import "./Navber.css"
function Navber({props}) {
  return (
    <div>
      <nav>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contatat</li>
        </ul>
      </nav>

      
        <h1>{props.work}</h1>
      
    </div>
  )
}

export default Navber
