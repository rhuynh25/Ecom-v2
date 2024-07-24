import React from 'react';

const ProductFilter = ({ onFilterChange }) => {
  return (
    <div className="product-filter">
      <label>
        Price:
        <select onChange={(e) => onFilterChange('price', e.target.value)}>
          <option value="all">All</option>
          <option value="0-50">0-50</option>
          <option value="51-100">51-100</option>
          <option value="101-200">101-200</option>
        </select>
      </label>
      <label>
        Type:
        <select onChange={(e) => onFilterChange('type', e.target.value)}>
          <option value="all">All</option>
          <option value="Top">Tops</option>
          <option value="Bottom">Bottoms</option>
          <option value="Jacket">Jackets</option>
        </select>
      </label>
    </div>
  );
};

export default ProductFilter;
