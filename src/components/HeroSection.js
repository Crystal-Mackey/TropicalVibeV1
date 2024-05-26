import React from 'react';
import '../styles/HeroSection.css';
import hero from '../assets/hero.png';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-content">
      </div>
    </div>
  );
};

export default HeroSection;
