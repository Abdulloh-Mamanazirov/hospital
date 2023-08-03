import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home, About, Contact, Doctors, Services } from "./Pages";

const App = () => {
  let location = useLocation();

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
};

export default App;
