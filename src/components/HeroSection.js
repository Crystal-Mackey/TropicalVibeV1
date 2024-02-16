import React from 'react';
import '../styles/HeroSection.css';
import hero from '../assets/hero.png';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-content">
        <h1>Welcome to D-Magic Auto Spa & Detailing</h1>
        <p>Experience the best care for your vehicle</p>
      </div>
    </div>
  );
};

export default HeroSection;
