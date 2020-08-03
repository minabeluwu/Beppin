import React from "react";

export default ({ precio }) => {
  return (
    <div className="cardCost-container">
      <p className="cardCost-productName">
        <span>Total</span>
      </p>
      <p className="cardCost-price">${precio}</p>
    </div>
  );
};
