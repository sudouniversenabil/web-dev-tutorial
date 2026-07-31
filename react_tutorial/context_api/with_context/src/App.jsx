import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { CounterContest } from './context/Contest'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterContest.Provider value={count}>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </CounterContest.Provider>
    </>
  )
}

export default App
