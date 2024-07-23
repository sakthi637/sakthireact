import React from 'react';
import './ThirdSection.css';

const ThirdSection = () => {
  return (
    <section id="third">
      <div className="left-section">
        <div className="container1">
          <div className="overlay-content">
            <h5>Low Price</h5>
            <br />
            <h1>High Coziness</h1>
            <p>UPTO 50% OFF</p>
            <br />
            <a href="#">Explore Now</a>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="container2">
          <div className="overlay-content">
            <h5>Beyoung Presents</h5>
            <br />
            <h1>Breezy Summer<br />Style</h1>
            <p>UPTO 50% OFF</p>
            <br />
            <a href="#">Explore Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
