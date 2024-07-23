import React from 'react';
import DMagicLogo from '../assets/logos/dmagic-logo.png';
import TropicalVibeLogo from '../assets/logos/tropical-vibe-logo.png';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="logos">
        <img src={DMagicLogo} alt="DMagic Logo" className="hero-logo" />
        <img src={TropicalVibeLogo} alt="Tropical Vibe Logo" className="hero-logo" />
      </div>
      <h1>Welcome to Our Company</h1>
      <p>Your one-stop solution for auto detailing and tints & wraps.</p>
    </div>
  );
}

export default HeroSection;
