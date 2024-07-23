import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import images from "./assets/images/images";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; // Make sure Footer component is imported

function App() {
  return (
    <div className="App">
      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <div className="gallery-footer-container">
          <section id="gallery">
            <Gallery images={images} />
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
