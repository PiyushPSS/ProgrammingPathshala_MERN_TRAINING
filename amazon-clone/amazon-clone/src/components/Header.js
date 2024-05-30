import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Amazon</div>
      <input className="search" type="text" placeholder="Search..." />
      <div className="nav">
        <div className="nav-item">Hello, Sign in</div>
        <div className="nav-item">Returns & Orders</div>
        <div className="nav-item">Cart</div>
      </div>
    </div>
  );
}

export default Header;
