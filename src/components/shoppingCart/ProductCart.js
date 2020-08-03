import React, { useContext } from "react";
import { DispatchContext } from "../../store/context";

const Product = ({ id, img, nombre, descripcion, precio }) => {
  const dispatch = useContext(DispatchContext);

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

        <button
          className="cardProduct-button"
          onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
