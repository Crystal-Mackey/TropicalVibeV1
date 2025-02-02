import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./components/Services";
import images from "./assets/images/images";
import Gallery from "./pages/Gallery";
import BackToTop from "./components/BackToTop";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
       <Home/>
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="gallery">
        <Gallery images={images}/>
      </section>
      <section id="contact">
        <ContactPage/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
      <BackToTop />
    </div>
  );
}

export default App;
