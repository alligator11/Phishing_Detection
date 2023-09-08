import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
