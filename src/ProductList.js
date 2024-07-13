// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from API (replace with actual API endpoint)
    axios.get('http://your-api-endpoint/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.productName} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">{product.productName}</h2>
          <p className="text-gray-600">Price: ${product.price}</p>
          <p className="text-yellow-500">Rating: {product.rating}</p>
          <p className="text-green-500">Discount: {product.discount}% off</p>
          <p className={`text-${product.availability === 'yes' ? 'green' : 'red'}-500`}>
            Availability: {product.availability}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
