import React from "react";

export default ({ precio }) => {
  return (
    <div className="cardCost-container">
      <p className="cardCost-productName">
        <span>Overall Price</span>
      </p>
      <p className="cardCost-price">${precio}</p>
    </div>
  );
};
