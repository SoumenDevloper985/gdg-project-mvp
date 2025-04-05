import React from 'react';
import './EducationalContent.css';

const tips = [
  "Understand your risk tolerance before investing.",
  "Diversification helps in managing risk.",
  "Regularly review your portfolio and rebalance when necessary."
];

function EducationalContent() {
  return (
    <div className="educational-content">
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default EducationalContent;
