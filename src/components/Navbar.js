import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/dmagic">DMagic</Link>
      <Link to="/tropical-vibe">Tropical Vibe Tints and Wraps</Link>
    </nav>
  );
}

export default Navbar;
