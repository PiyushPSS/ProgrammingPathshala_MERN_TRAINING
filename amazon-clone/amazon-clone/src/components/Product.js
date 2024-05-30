import React from 'react';
import './Product.css';

const Product = ({ title, image, price, rating, description }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-description">{description}</p>
        <p className="product-price">
          <small>₹</small>
          <strong>{price.toFixed(2)}</strong>
        </p>
        <div className="product-rating">
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
