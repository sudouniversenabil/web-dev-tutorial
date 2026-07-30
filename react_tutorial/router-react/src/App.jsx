import { useState } from 'react'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navber from './compontet/Navber'
import Loging from './compontet/Loging'
import Home from './compontet/Home'
import User from './compontet/User'

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {path:"/",
      element:<><Navber /><Home /></>
    },
    {
      path:"/loging",
      element:<><Navber/><Loging /></> 
    },
        {
      path:"/user:username",
      element:<><Navber/><User /></> 
    }
  ])

  return (
    <>
      
      <RouterProvider router={router} />
    </>

  )
}

export default App
