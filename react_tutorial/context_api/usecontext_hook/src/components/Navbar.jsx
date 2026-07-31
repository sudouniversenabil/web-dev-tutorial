import React from 'react'
import Button from './Button.jsx'
function Navbar({count}) {
  return (
    <>
    <div>navbar hoon mai{count}</div>
    <Button count={count}/>
    </>
  )
}

export default Navbar