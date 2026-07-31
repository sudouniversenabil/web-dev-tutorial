import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [name, setname] = useState("harry")
  const [form, setform] = useState({ email: "", phone: "" })

  const handEvent = () => {
    alert("hey i am click")
  }

  const handleNameChange = (e) => {
    setname(e.target.value)
  }


  const new_add = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handEvent}>click me </button>
      </div>

      {/* <div className='over' onMouseOver={over}>iam another event</div> */}

      {/* Name Input */}
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />

      {/* Email Input */}
      <input
        type="text"
        name='email'
        value={form.email || ""}
        onChange={new_add}
      />

      <input
        type="text"
        name='phone'
        value={form.phone || ""}
        onChange={new_add}
      />
    </>
  )
}

export default App