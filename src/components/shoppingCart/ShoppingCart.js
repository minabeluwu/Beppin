import React from "react";
import { Link } from "react-router-dom";
import "../../styles/shoppingCart.css";
import Product from "./Product";
import ShoppingCartAPIResponse from "../API/ShoppingCartAPIResponse";

export default () => {
  return (
    <>
      <section className="shoppingCart">
        <div className="shoppingCart-shoppingList">
          {ShoppingCartAPIResponse.productList.map(
            ({ id, nombre, precio, img, descripcion }) => (
              <Product
                id={id}
                precio={precio}
                imgSrc={img}
                nombre={nombre}
                descripcion={descripcion}
              />
            )
          )}
        </div>

        <div className="cardCost">
          <div className="cardCost-container">
            <p className="cardCost-productName">
              <span>{ShoppingCartAPIResponse.productList[0].id}</span>
              {ShoppingCartAPIResponse.productList[0].nombre}
            </p>
            <p className="cardCost-price">
              {ShoppingCartAPIResponse.productList[0].precio}
            </p>
          </div>

          <div className="cardCost-container">
            <p className="cardCost-productName">
              <span>{ShoppingCartAPIResponse.productList[1].id}</span>
              {ShoppingCartAPIResponse.productList[1].nombre}
            </p>
            <p className="cardCost-price">
              {ShoppingCartAPIResponse.productList[1].precio}
            </p>
          </div>

          <div className="cardCost-container">
            <p className="cardCost-productName">
              <span>{ShoppingCartAPIResponse.productList[2].id}</span>
              {ShoppingCartAPIResponse.productList[2].nombre}
            </p>
            <p className="cardCost-price">
              {ShoppingCartAPIResponse.productList[2].precio}
            </p>
          </div>

          <div className="cardCost-container">
            <p className="cardCost-productName">
              <span>{ShoppingCartAPIResponse.productList[3].id}</span>
              {ShoppingCartAPIResponse.productList[3].nombre}
            </p>
            <p className="cardCost-price">
              {ShoppingCartAPIResponse.productList[3].precio}
            </p>
          </div>

          {/* Precio Total */}
          <div className="cardCost-container">
            <p className="cardCost-total">overall price</p>
            <p className="cardCost-price">
              {ShoppingCartAPIResponse.productList[3].precio}
            </p>
          </div>
        </div>
      </section>
      <div className="buttons-container">
        <div className="buttons">
          <a href="#" className="button">
            Cancel
          </a>{" "}
          {/* Este boton anula todas las compras agregadas, hace un reset. */}
          <Link to={`/Buy`} className="button">
            Buy
          </Link>
        </div>
      </div>
    </>
  );
};
