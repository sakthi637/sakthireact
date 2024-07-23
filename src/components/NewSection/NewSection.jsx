import React from 'react';
import './NewSection.css'; // Import the CSS file

const NewSection = () => {
  return (
    <section id="new-section">
      <div className="new-section-content">
        <div className="left-side">
          <div className="background-content">
            <h1>WE MADE YOUR EVERYDAY
              <br /> FASHION BETTER!
            </h1>
            <br /><br />
            <p>In our journey to improve everyday fashion, <br /><br />euphoria presents EVERYDAY wear range - <br /><br />Comfortable & Affordable fashion 24/7</p>
            <br />
            <br /><br /><button className="cta-button">Shop Now</button>
          </div>
        </div>
        <div className="right-side">
          <img src="src/assets/images/yell.png" alt="Right Side Image" />
        </div>
      </div>
    </section>
  );
};

export default NewSection;
