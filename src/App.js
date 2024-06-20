import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import images from "./assets/images/images";
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <section id="gallery">
          <Gallery images={images} />
        </section>
        <footer>
        <p>D MAGIC AUTO SPA AND DETAILING</p>

        <p>
          {" "}
          <a
            href="https://maps.app.goo.gl/PzaSLcwN9BNDnyv59"
          >
            573 SW Biltmore St, Port St Lucie, FL 34983
          </a>
        </p>
        <p>
          <a href="tel:+17722007271">772-200-7271</a>
        </p>
      </footer>
      </main>
    </div>
  );
}

export default App;
