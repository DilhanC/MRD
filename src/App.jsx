import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact/Contact'
import Electricity from './pages/Electricity/Electricity'
import Plumbing from './pages/Plumbing/Plumbing'
import Renovation from './pages/Renovation/Renovation'

export default function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/electricité" element={<Electricity />}/>
          <Route exact path="/plomberie" element={<Plumbing />}/>
          <Route exact path="/renovation" element={<Renovation />}/>
        </Routes>
      <Footer />
    </div>
  )
}