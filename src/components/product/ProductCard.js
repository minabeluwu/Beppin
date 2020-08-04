import React from "react";
import { Link } from "react-router-dom";

export default ({ img, id, precio, nombre }) => {
  return (
    <>
      <Link to={`/productChoice/${id}`} className="productCard-link">
        <img src={img} alt=" " className="productCard-img" />
      </Link>

      <div className="productCard-content">
        <p className="productCard-paragraph">${precio}</p>
        <p className="productCard-paragraph">{nombre}</p>
      </div>
    </>
  );
};
