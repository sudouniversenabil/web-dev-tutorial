import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navber from './compononet/Navber'
import Fotter from './compononet/Fotter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App flex'>

      <Navber />

      <div className='valu'>{count}
      </div>
      <button onClick={() => setCount(count + 1)}>
        click me
      </button>
    <Fotter />

    </div>


  )
}

export default App
