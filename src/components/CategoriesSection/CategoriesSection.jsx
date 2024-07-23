import React from 'react';
import './CategoriesSection.css'; // Import the CSS file

const CategoriesSection = () => {
  // Split the menCategories into two arrays for two rows
  const firstRowMenCategories = menCategories.slice(0, 4);
  const secondRowMenCategories = menCategories.slice(4);

  return (
    <section id="comp-new-section">
      <div className="comp-new-section-content">
        <span>
          <img src="src/assets/bgs/Rectangle 21 voil.png" alt="line" className="line2" /> Categories For Men
        </span>
        <div className="comp-row">
          {firstRowMenCategories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        <div className="comp-row">
          {secondRowMenCategories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        <span>
          <img src="src/assets/bgs/Rectangle 21 voil.png" alt="line" className="line2" /> Categories For Women
        </span>
        <div className="comp-row">
          {womenCategories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ imgSrc, title, link }) => (
  <div className="comp-column">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <a href={link}>
      <p>Explore Now !</p>
    </a>
    <i className="fas fa-arrow-right arrow-icon"></i>
  </div>
);

const menCategories = [
  { imgSrc: 'src/assets/bgs/shirt.png', title: 'Shirts', link: '#' },
  { imgSrc: 'src/assets/bgs/print.png', title: 'Printed T-Shirts', link: '#' },
  { imgSrc: 'src/assets/bgs/plain.png', title: 'Plain T-Shirts', link: '#' },
  { imgSrc: 'src/assets/images2/polo.jpg', title: 'Polo T-Shirt', link: '#' },
  { imgSrc: 'src/assets/bgs/hood.png', title: 'Hoodies', link: '#' },
  { imgSrc: 'src/assets/bgs/jeans.png', title: 'Jeans', link: '#' },
  { imgSrc: 'src/assets/bgs/acti.png', title: 'Activewear', link: '#' },
  { imgSrc: 'src/assets/bgs/box.png', title: 'Boxers', link: '#' }
];

const womenCategories = [
  { imgSrc: 'src/assets/bgs/womn1.png', title: 'Hoodies', link: '#' },
  { imgSrc: 'src/assets/bgs/womn2.png', title: 'Coats & Parkas', link: '#' },
  { imgSrc: 'src/assets/bgs/womn3.png', title: 'Tees & T-Shirt', link: '#' },
  { imgSrc: 'src/assets/bgs/womn4.png', title: 'Boxers', link: '#' }
];

export default CategoriesSection;
