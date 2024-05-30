import React from 'react';
import './Home.css';
import Banner from './Banner';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-container">
        <ProductList />
      </div>
    </div>
  );
}

export default Home;
