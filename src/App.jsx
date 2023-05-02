import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Doctors from './Pages/Doctors'
import Home from './Pages/Home'
import Services from './Pages/Services'

const App = () => {
  let location = useLocation()
  console.log(location);
  return (
    <>
      {location.pathname !== "/services" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
