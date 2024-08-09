import React, { useState } from 'react';
import '../styles/Decals.css';
import decals from '../assets/decals/JS/decalImports';

const Decals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  const filteredDecals = decals.filter(decal =>
    decal.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="decals">
      <h1>Decal Gallery</h1>
      <input
        type="text"
        placeholder="Search decals..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="gallery-grid">
        {filteredDecals.map(decal => (
          <div
            key={decal.id}
            className="gallery-item"
            data-background={decal.backgroundColor}
            onClick={() => openModal(decal)}
          >
            <img src={decal.src} alt={decal.alt} />
          </div>
        ))}
      </div>
      {modalOpen && currentImage && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            style={{ backgroundColor: currentImage.backgroundColor }}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close"
              onClick={closeModal}
              style={{ color: currentImage.closeColor }}
            >
              &times;
            </span>
            <img src={currentImage.src} alt={currentImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Decals;
