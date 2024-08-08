import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Category.css';

const categories = {
  floral: [
    { id: 1, src: 'path/to/floral1.jpg', alt: 'Floral 1' },
    { id: 2, src: 'path/to/floral2.jpg', alt: 'Floral 2' },
    // Add more images as needed
  ],
  animals: [
    { id: 1, src: 'path/to/animal1.jpg', alt: 'Animal 1' },
    { id: 2, src: 'path/to/animal2.jpg', alt: 'Animal 2' },
    // Add more images as needed
  ],
  // Add more categories as needed
};

const Category = () => {
  const { category } = useParams();
  const images = categories[category] || [];
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="category">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Decals</h1>
      <div className="gallery-grid">
        {images.map(image => (
          <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={currentImage.src} alt={currentImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
