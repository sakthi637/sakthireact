import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import ThirdSection from './components/ThirdSection/ThirdSection';
import GallerySection from './components/GallerySection/GallerySection';
import NewSection from './components/NewSection/NewSection';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import TopBrandDealSection from './components/TopBrandDealSection/TopBrandDealSection';
import WishSection from './components/WishSection/WishSection';
import FeedSection from './components/FeedSection/FeedSection';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import ProductsSection from './components/ProductsSection/ProductsSection';
import Womens from './components/ProductsSection/Womens';




function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <div className="App">
                <Carousel />
              </div>
              <div className="App">
                <ThirdSection />
              </div>
              <div className="App">
                <GallerySection />
              </div>
              <div className="App">
                <NewSection />
              </div>
              <div>
                <CategoriesSection />
              </div>
              <TopBrandDealSection />
              <WishSection />
              <FeedSection />
              {/* <div className="App">
                <Footer />
              </div> */}
              <Popup />
            
            </div>
          } />
          <Route path="/men" element={<ProductsSection />} /> 
          <Route path="/women" element={<Womens />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
