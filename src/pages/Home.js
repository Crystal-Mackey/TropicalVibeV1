import React from "react";
import TropicalVibeLogo from "../assets/logos/tropical-vibe-logo.png";
import ShopOfTheYear2025 from "../assets/logos/2025ShopOfTheYear.jpg";
import "../styles/Hero.css";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="logos">
        <img
          src={TropicalVibeLogo}
          alt="Tropical Vibe Logo"
          className="hero-logo"
        />
        <img
          src={ShopOfTheYear2025}
          alt="2025 Best Detailing Shop of the Year"
          className="hero-logo shop-award"
        />
      </div>
      <h1>Welcome to Our Shop</h1>
      <p>Your one-stop solution for auto detailing, tints, wraps and custom designs and decals.</p>
    </div>
  );
};

export default Home;
