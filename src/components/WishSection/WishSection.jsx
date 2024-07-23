import React from 'react';
import './WishSection.css'; // Import the CSS file

const WishSection = () => {
  return (
    <section id="wish">
      <div className="wish-content">
        <span>
          <img src="src/assets/bgs/Rectangle 21 voil.png" alt="line" className="line3" /> In The Limelight
        </span>
        <div className="wish-row">
          {wishItems.map((item, index) => (
            <div className="wish-column" key={index}>
              <i className="wishlist-icon fa fa-heart"></i>
              <img src={item.imgSrc} alt={item.imgAlt} />
              <h3>{item.title}</h3>
              <a href={item.link}><p>{item.brand}</p></a>
              <p className="dollar">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const wishItems = [
  { imgSrc: 'src/assets/bgs/wit.png', imgAlt: 'Design 1', title: 'Black Sweatshirt', brand: "Jhanvi's Brand", link: '#', price: '$123.00' },
  { imgSrc: 'src/assets/bgs/peach.png', imgAlt: 'Design 2', title: 'Line Pattern Black', brand: "AS's Brand", link: '#', price: '$37.00' },
  { imgSrc: 'src/assets/bgs/orange.png', imgAlt: 'Design 3', title: 'Black Shorts', brand: "MM's Brand", link: '#', price: '$39.00' },
  { imgSrc: 'src/assets/bgs/pink.png', imgAlt: 'Design 4', title: 'Lavender Hoodie', brand: "Nike's Brand", link: '#', price: '$119.00' },
];

export default WishSection;
