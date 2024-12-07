import React from 'react';
import '../styles/Footer.css'; // Ensure this imports your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>TROPICAL VIBE Detailing/Tints/Wraps/Customs</p>
        <p>
          <a href="https://maps.app.goo.gl/PzaSLcwN9BNDnyv59">
            573 SW Biltmore St, Port St Lucie, FL 34983
          </a>
        </p>
        <p>
          <a href="tel:+17722007271">772-200-7271</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
