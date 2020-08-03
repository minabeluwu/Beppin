import React from "react";
import { Link } from "react-router-dom";

export default ({ img, id, precio, nombre }) => {
  return (
    <>
      <Link to={`/productChoice/${id}`} className="productCard-link">
        <img src={img} alt=" " className="productCard-img" />
      </Link>

      <p className="productCard-content">
        <span>${precio}</span>
        <br />
        {nombre}
      </p>
    </>
  );
};
