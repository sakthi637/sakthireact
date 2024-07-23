import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    'src/assets/images/new1.webp',
    'src/assets/images/men1.jpg',
    'src/assets/images/new6.jpg',
  ];

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const showNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const showPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(showNextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="hero">
      <div id="main">
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
                style={{ backgroundImage: `url(${item})` }}
              ></div>
            ))}
          </div>
          <div className="overlay-content">
            <h3>T-Shirt / Tops</h3>
            <br />
            <h1>Summer<br />Value Pack</h1>
            <br />
            <h3>cool / colorful / comfy</h3>
            <br />
            <button className="cta-button">Shop Now</button>
          </div>
          <button className="carousel-prev" onClick={showPrevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-next" onClick={showNextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="carousel-dots">
            {items.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => showSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
