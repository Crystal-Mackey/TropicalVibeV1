// src/components/Services.js
import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-content">
          <div className="services-section">
            <h3>Interior Detailing</h3>
            <ul>
              <li>Shampoo</li>
              <li>Steam Cleaning</li>
              <li>Odor Removal</li>
            </ul>
          </div>
          <div className="services-section">
            <h3>Exterior Detailing</h3>
            <ul>
              <li>Basic Wash & Waxes</li>
              <li>Machine Polish</li>
              <li>Buff & Wax</li>
            </ul>
          </div>
          <div className="services-section">
            <h3>Specialty Services</h3>
            <ul>
              <li>Paint Corrections</li>
              <li>Ceramic Coatings</li>
              <li>Good Ol' Paint Enhancements</li>
            </ul>
          </div>
          <div className="services-section">
            <h3>We Service All Vehicles</h3>
            <ul>
              <li>Vehicle</li>
              <li>Boat/Yacht</li>
              <li>RV</li>
              <li>Even Airplanes!</li>
            </ul>
          </div>
          <p>With over 5 years of experience, we've worked alongside some of your favorite local detailers. Choose D-Magic Detailing for premium auto spa services that stand out.</p>
          <p className="call-to-action">So why not call us if other detailers call on us too?</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
