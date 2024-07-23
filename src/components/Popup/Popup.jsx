import React, { useState, useEffect } from 'react';
import './Popup.css'; // Import the CSS file

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`popup ${!isVisible ? 'hide-popup' : ''}`}>
      <div className="popup-content">
        <div className="popup-close" onClick={handleClose}>
          <i className='bx bx-x'></i>
        </div>
        <div className="popup-left">
          <div className="popup-img-container">
            <img className="popup-img" src="src/assets/images/pop1.jpg" alt="popup" />
          </div>
        </div>
        <div className="popup-right">
          <div className="right-content">
            <h1>Get Discount <span>50%</span> Off</h1>
            <p>Sign up to our newsletter and save 30% for your next purchase. No spam, we promise!</p>
            <form action="#">
              <input type="email" placeholder="Enter your email..." className="popup-form" />
              <a href="#">Subscribe</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
