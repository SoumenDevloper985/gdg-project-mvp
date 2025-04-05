import React from 'react';
import './ProductDiscovery.css';

const products = [
  { id: 1, name: "Equity Mutual Fund", description: "Long-term growth through diversified stocks." },
  { id: 2, name: "Fixed Deposit", description: "Safe and secure returns with guaranteed interest." },
  { id: 3, name: "Exchange Traded Fund (ETF)", description: "Diversified exposure with low fees." }
];

function ProductDiscovery() {
  return (
    <div className="product-discovery">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button>Learn More</button>
        </div>
      ))}
    </div>
  );
}

export default ProductDiscovery;
