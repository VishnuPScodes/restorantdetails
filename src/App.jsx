import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Data } from './components/Data'

import { RestorantDetails } from './components/RestorantDetails'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
  
    </div>
  )
}

export default App
