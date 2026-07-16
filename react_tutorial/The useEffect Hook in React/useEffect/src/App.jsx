import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navber from './com/Navber'

function App() {
  const [count, jog] = useState(0)
  useEffect(() => {
    alert("hey welclone to my page ")
  }, [])
  useEffect(()=>{
    alert("hey count is load and change")
  },[count])

  // useEffect(()=>{
  //   alert("agin change")
  // },[color.work+count])
  

  return (
    <>
      <Navber work="red is"/>
      <h2>{count}</h2>
      <button onClick={() => jog(count + 1)}>buttion</button>
      
      
    </>
  )
}

export default App
