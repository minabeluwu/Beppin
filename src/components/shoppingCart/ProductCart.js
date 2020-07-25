import React, { Component } from "react";
import ProductAPIResult from "../../API/ProductAPIResult";

const Product = ({ img, nombre, descripcion, precio }) => {
  return (
    <div className="cardProduct">
      <img src={img} alt="" className="cardProduct-img" />

      <div className="cardProduct-description">
        <p className="cardProduct-product">
          <span>{nombre}</span>
          <br />
          {descripcion}
        </p>
        <p className="cardProduct-price">{precio}</p>

        <button className="cardProduct-button">Delete</button>
      </div>
    </div>
  );
};

export default Product;
