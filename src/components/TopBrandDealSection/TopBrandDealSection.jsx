import React from 'react';
import './TopBrandDealSection.css'; // Import the CSS file

const TopBrandDealSection = () => {
  return (
    <section id="back">
      <div className="back-content">
        <h1>Top Brand Deal</h1>
        <p className="in">Up To <span className="int">60%</span> off on brands</p>
        <div className="back-images">
          {brandImages.map((image, index) => (
            <div className="back-image" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const brandImages = [
  { src: 'src/assets/bgs/nik.png', alt: 'Image 1' },
  { src: 'src/assets/bgs/hm.png', alt: 'Image 2' },
  { src: 'src/assets/bgs/us.png', alt: 'Image 3' },
  { src: 'src/assets/bgs/lvs.png', alt: 'Image 4' },
  { src: 'src/assets/bgs/pum.png', alt: 'Image 5' },
];

export default TopBrandDealSection;
