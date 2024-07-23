import React, { useEffect, useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const galleryItems = [
    { src: 'src/assets/images2/active.jpg', alt: 'Gallery Image 1', caption: 'Knitted Joggers' },
    { src: 'src/assets/images2/img-2.jpg', alt: 'Gallery Image 2', caption: 'Urban Shirts' },
    { src: 'src/assets/images2/img-3.jpg', alt: 'Gallery Image 3', caption: 'Full Sleeve' },
    { src: 'src/assets/images2/img-4.jpg', alt: 'Gallery Image 4', caption: 'Active T-Shirts' },
    { src: 'src/assets/images2/active.jpg', alt: 'Gallery Image 1', caption: 'Knitted Joggers' },
    { src: 'src/assets/images2/img-2.jpg', alt: 'Gallery Image 2', caption: 'Urban Shirts' },
    { src: 'src/assets/images2/img-3.jpg', alt: 'Gallery Image 3', caption: 'Full Sleeve' },
    { src: 'src/assets/images2/img-4.jpg', alt: 'Gallery Image 4', caption: 'Active T-Shirts' }
  ];

  useEffect(() => {
    const startAutoScroll = () => {
      const id = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 9000); // Change image every 3 seconds
      setIntervalId(id);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    startAutoScroll();

    return () => stopAutoScroll();
  }, [intervalId]);

  useEffect(() => {
    const totalItems = galleryItems.length;
    const visibleItems = Math.floor(document.querySelector('.gallery-images').clientWidth / document.querySelector('.gallery-item').clientWidth);
    if (currentIndex < 0) {
      setCurrentIndex(totalItems - visibleItems);
    } else if (currentIndex >= totalItems - visibleItems + 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex, galleryItems.length]);

  return (
    <section id="gallery">
      <div className="gallery-content">
        <span>
          <img src="src/assets/bgs/Rectangle 21 voil.png" alt="line" className="line1" /> New Arrival
        </span>
        <div className="gallery-carousel">
          <div className="gallery-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {galleryItems.map((item, index) => (
              <div className="gallery-item" key={index}>
                <img src={item.src} alt={item.alt} />
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
          <button className="gallery-prev" onClick={() => setCurrentIndex(currentIndex - 1)}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="gallery-next" onClick={() => setCurrentIndex(currentIndex + 1)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
