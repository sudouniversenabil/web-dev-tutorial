import React from 'react'
import Component from './Component.jsx'
function Button({count}) {
  return (
    // <div>button</div>
    <>
      <div>
      <button> <span><Component count={count}/></span>I am a button</button>
    </div>
    </>
  )
}

export default Button