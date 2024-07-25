import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductFilter from './ProductFilter';
import './Product.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecom-v2-x6vl.onrender.com/api/products');
        console.log('Received data:', response.data);
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially set both products and filteredProducts
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // Filtering based on priceFilter and typeFilter
    let filtered = products;

    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      filtered = filtered.filter(product => product.PRICE >= min && product.PRICE <= max);
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter(product => product.TYPE === typeFilter);
    }

    setFilteredProducts(filtered); // Update filteredProducts state
  }, [priceFilter, typeFilter, products]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'price') {
      setPriceFilter(value);
    } else if (filterType === 'type') {
      setTypeFilter(value);
    }
  };

  return (
    <main>
      <div className="container">
        <div id="product-header">
          <h1>Our Products</h1>
          <ProductFilter onFilterChange={handleFilterChange} />
        </div>
        <div id="product-container">
          {filteredProducts.map(product => (
            <div key={product.NAME} className="product-item">
              <img src={product.RouteIMG} alt={product.NAME} />
              <h2>{product.NAME}</h2>
              <p>{product.DESCRIPTION}</p>
              <p className="price">${product.PRICE}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
