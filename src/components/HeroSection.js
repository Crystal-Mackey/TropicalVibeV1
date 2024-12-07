import React from 'react';
import TropicalVibeLogo from '../assets/logos/tropical-vibe-logo.png';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="logos">
        <img src={TropicalVibeLogo} alt="Tropical Vibe Logo" className="hero-logo" />
      </div>
      <h1>Welcome to Our Shop</h1>
      <p>Your one-stop solution for auto detailing, tints, wraps and custom designs and decals.</p>
    </div>
  );
}

export default HeroSection;
