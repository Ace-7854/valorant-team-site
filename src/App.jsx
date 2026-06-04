import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './assets/Navbar'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import RosterPage from './pages/roster'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/roster" element={<RosterPage />} />
    </Routes>
  </Router>
  </>
  )
}

export default App
