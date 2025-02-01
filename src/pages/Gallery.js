import React, { useState } from 'react';
import '../styles/Gallery.css';

function Gallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const showNextImage = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    setSelectedIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
            <span className="close" onClick={closeModal}>&times;</span>
            <button className="prev" onClick={showPrevImage}>&#10094;</button>
            <button className="next" onClick={showNextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;