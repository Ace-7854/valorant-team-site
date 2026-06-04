import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './assets/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  </Router>
  </>
  )
}

export default App
