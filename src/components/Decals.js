import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Decals.css';

const categories = [
  { id: 1, name: 'Floral', image: 'path/to/floral.jpg' },
  { id: 2, name: 'Animals', image: 'path/to/animals.jpg' },
  // Add more categories as needed
];

const Decals = () => {
  return (
    <div className="decals">
      <h1>Decal Categories</h1>
      <div className="grid">
        {categories.map(category => (
          <Link to={`/decals/${category.name.toLowerCase()}`} key={category.id} className="card">
            <img src={category.image} alt={category.name} />
            <div className="card-title">{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Decals;
