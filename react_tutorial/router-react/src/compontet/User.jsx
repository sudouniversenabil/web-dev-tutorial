import React from 'react'

import { useParams } from 'react-router-dom'

function User() {
    
  return (
   
    
    <div>{useParams().username}</div>
    
  )
}

export default User