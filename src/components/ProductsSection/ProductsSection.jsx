// ProductsSection.jsx
import React from 'react';
import './ProductsSection.css'; // Import the CSS file for the component

const products = [
  { id: 1, src: 'src/assets/bgs/acti.png', discount: '67%', category: "MEN'S CLOTHES", name: 'Joggers' },
  { id: 2, src: 'src/assets/images2/polo.jpg', discount: '43%', category: "MEN'S CLOTHES", name: 'Polo T-Shirts'  },
  { id: 3, src: 'src/assets/bgs/print.png', discount: '', category: "MEN'S CLOTHES", name: 'Printed T-Shirts' },
  { id: 4, src: 'src/assets/bgs/plain.png', discount: '56%', category: "MEN'S CLOTHES", name: 'Plain T-Shirts' },
  { id: 5, src: 'src/assets/bgs/jeans.png', discount: '40%', category: "MEN'S CLOTHES", name: 'Jeans' },
  { id: 6, src: 'src/assets/bgs/box.png', discount: '', category: "MEN'S CLOTHES", name: 'Boxers' },
  { id: 7, src: 'src/assets/bgs/hood.png', discount: '39%', category: "MEN'S CLOTHES", name: 'Hoodies' },
  { id: 8, src: 'src/assets/bgs/shirt.png', discount: '41%', category: "MEN'S CLOTHES", name: 'Shirts' },
];

const ProductsSection = () => {
  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>Men's Fashion</h1>
        <form>
          <select>
            <option value="1">Default Sorting</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Popularity</option>
            <option value="4">Sort By Sale</option>
            <option value="5">Sort By Rating</option>
          </select>
          <span><i className="bx bx-chevron-down"></i></span>
        </form>
      </div>
      <div className="product-center container">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div className="overlay">
              <a href="#" className="product-thumb">
                <img src={product.src} alt={product.name} />
              </a>
              {product.discount && <span className="discount">{product.discount}</span>}
            </div>
            <div className="product-info">
              <span>{product.category}</span>
              <a href="#">{product.name}</a>
              <h4>{product.price}</h4>
            </div>
            <ul className="icons">
              <li><i className="bx bx-heart"></i></li>
              <li><i className="bx bx-show"></i></li>
              <li><i className="bx bx-cart"></i></li>
            </ul>
          </div>
        ))}
      </div>
      <section className="pagination">
        <div className="container">
          <span>1</span> <span>2</span> <span>3</span> <span>4</span>
          <span><i className="bx bx-right-arrow-alt"></i></span>
        </div>
      </section>
    </section>
  );
}

export default ProductsSection;
