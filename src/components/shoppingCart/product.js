import React from "react";

const Product = ({ id, imgSrc, nombre, descripcion, precio }) => {
  return (
    <div className="cardProduct">
      <p className="cardProduct-idProduct">{id}</p>
      <img src={imgSrc} alt="" className="cardProduct-img" />

      <div className="cardProduct-description">
        <p className="cardProduct-product">
          <span>{nombre}</span>
          <br />
          {descripcion}
        </p>
        <p className="cardProduct-price">{precio}</p>

        <a href="#" className="cardProduct-button">
          button
        </a>
      </div>
    </div>
  );
};

export default Product;