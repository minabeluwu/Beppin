import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/shoppingCart.css";
import Product from "./Product";
import ShoppingCartAPIResponse from "../API/ShoppingCartAPIResponse";
import Cost from "./Cost";
import OverallPrice from "./OverallPrice";
import { StateContext } from "../../store/context";

export default () => {
  const [total, setTotal] = useState(0);
  const { shoppingCart } = useContext(StateContext);

  useEffect(() => {
    let ShoppingCartAPITotal = [];

    // ShoppingCartAPIResponse.productList.forEach((producto) => {
    //   const precio = producto.precio;
    //   ShoppingCartAPITotal.push(precio);
    // });

    shoppingCart.forEach((producto) => {
      const precio = producto.precio;
      ShoppingCartAPITotal.push(precio);
    });

    const sumaTotal = ShoppingCartAPITotal.reduce((a, b) => a + b);

    setTotal(sumaTotal);
  }, [shoppingCart]);

  return (
    <>
      <section className="shoppingCart">
        <div className="shoppingCart-shoppingList">
          {shoppingCart.map(({ id, nombre, precio, img, descripcion }) => (
            <Product
              id={id}
              precio={precio}
              imgSrc={img}
              nombre={nombre}
              descripcion={descripcion}
            />
          ))}
        </div>

        <div className="cardCost">
          {shoppingCart.map(({ nombre, id, precio }) => (
            <Cost nombre={nombre} id={id} precio={precio} />
          ))}

          <OverallPrice allPrice precio={total} />
        </div>
      </section>

      <div className="buttons-container">
        <div className="buttons">
          {/* Este boton anula todas las compras agregadas, hace un reset. */}
          <a href="#" className="button">
            Cancel
          </a>

          <Link to={`/Buy`} className="button">
            Buy
          </Link>
        </div>
      </div>
    </>
  );
};
