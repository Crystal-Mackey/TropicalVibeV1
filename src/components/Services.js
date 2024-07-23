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
            <p>Shampoo</p>
            <p>Steam Cleaning</p>
            <p>Odor Removal</p>
          </div>
          <div className="services-section">
            <h3>Exterior Detailing</h3>
            <p>Basic Wash & Waxes</p>
            <p>Machine Polish</p>
            <p>Buff & Wax</p>
          </div>
          <div className="services-section">
            <h3>Specialty Services</h3>
            <p>Paint Corrections</p>
            <p>Ceramic Coatings</p>
            <p>Good Ol' Paint Enhancements</p>
          </div>
          <div className="services-section">
            <h3>We Service All Vehicles</h3>
            <p>Vehicle</p>
            <p>Boat/Yacht</p>
            <p>RV</p>
            <p>Even Airplanes!</p>
          </div>
          <div className="services-section">
            <h3>Tinting and Wraps</h3>
            <p>Auto Tinting</p>
            <p>Marine Tinting</p>
            <p>Commercial Tinting</p>
            <p>Residential Tinting</p>
            <p>Aircraft Tinting</p>
            <p>Our tinting services enhance privacy, reduce glare, and provide UV protection, while our wrapping services offer a unique and stylish look for your vehicle, boat, or building.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
