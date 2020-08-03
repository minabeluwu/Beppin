import React from "react";

export default ({ nombre, precio }) => {
  return (
    <div className="cardCost-container">
      <p className="cardCost-productName">{nombre}</p>
      <p className="cardCost-price">${precio}</p>
    </div>
  );
};
