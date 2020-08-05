import React from "react";

export default ({ precio }) => {
  return (
    <div className="cardCost-container">
      <p className="cardCost-productName-bold">Total</p>
      <p className="cardCost-productName-bold">${precio}</p>
    </div>
  );
};
