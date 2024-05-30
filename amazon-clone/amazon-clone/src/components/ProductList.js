import React from 'react';
import Product from './Product';
import './ProductList.css';

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Apple AirPods Pro",
      image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg",
      price: 24999.99,
      rating: 5,
      description: "Active noise cancellation for immersive sound."
    },
    {
      id: 2,
      title: "Samsung Galaxy S21",
      image: "https://m.media-amazon.com/images/I/81r8JazMf+L._AC_SL1500_.jpg",
      price: 69999.99,
      rating: 4,
      description: "Pro-grade camera and 8K video recording."
    },
    {
      id: 3,
      title: "Nike Air Max 270",
      image: "https://m.media-amazon.com/images/I/81pPsf--tPL._AC_UL1500_.jpg",
      price: 12999.99,
      rating: 4,
      description: "Comfortable and stylish running shoes."
    },
    {
      id: 4,
      title: "Sony WH-1000XM4",
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
      price: 24999.99,
      rating: 5,
      description: "Industry leading noise cancellation headphones."
    },
    {
      id: 5,
      title: "Dell XPS 13 Laptop",
      image: "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
      price: 119999.99,
      rating: 5,
      description: "Compact and powerful with InfinityEdge display."
    },
    {
      id: 6,
      title: "Herschel Little America Backpack",
      image: "https://m.media-amazon.com/images/I/81L2xgITGQL._AC_SL1500_.jpg",
      price: 7999.99,
      rating: 4,
      description: "Durable and spacious with modern design."
    }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <Product 
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
