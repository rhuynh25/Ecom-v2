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
        <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <nav>
        <div className="container">
          <Link to="/" className="logo">RPH</Link>
          <ul className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
            <li><Link to="/" onClick={handleMenuToggle}>Home</Link></li>
            <li><Link to="/products" onClick={handleMenuToggle}>Products</Link></li>
            <li><Link to="/contact" onClick={handleMenuToggle}>Contact</Link></li>
            <li><Link to="/cart" onClick={handleMenuToggle}>Cart</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;