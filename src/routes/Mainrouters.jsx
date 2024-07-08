import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import About from '../components/About'
import Contact from '../components/Contact'
import RecipePage from '../components/RecipePage'

const Mainrouters = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipes" element={<RecipePage />} />
        </Routes>
    </div>
  )
}

export default Mainrouters