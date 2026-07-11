// import React from "react"
import { useState } from "react"
import Nav from "./com/Nav"
function App() {
  // const [count, setCount] = useState(0)
  const [count,jog]=useState(100)

  return (
    <>
      <Nav/>

      <button onClick={()=>{jog(count-1)}}>update the value {count}</button>
    </>
  )
}

export default App
