import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <i className="fa fa-bars"></i>
      </div>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <div className="container">
          <Link to="/" className="logo">RPH</Link>
          <ul id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;