import React from 'react';
import products from './products';
import './ProductList.css'; // Import your CSS file

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.productName} className="product-card">
          <h2 className="product-name">{product.productName}</h2>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-rating">Rating: {product.rating}</p>
          <p className="product-discount">Discount: {product.discount}% off</p>
          <p className={`product-availability ${product.availability === 'yes' ? 'available' : 'out-of-stock'}`}>
            Availability: {product.availability}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
