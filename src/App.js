import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
