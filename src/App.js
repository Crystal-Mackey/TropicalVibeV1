import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Decals from './components/Decals';
import Category from './components/Category';
import images from "./assets/images/images";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<div><HeroSection /><AboutUs /><Services /><Gallery images={images} /></div>} />
          {/* <Route path="/decals" element={<Decals />} />
          <Route path="/decals/:category" element={<Category />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
