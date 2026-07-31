import { useState } from 'react'

import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>hallo</div> */}
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>

      <Navbar count={count}/>


    </>
  )
}

export default App
