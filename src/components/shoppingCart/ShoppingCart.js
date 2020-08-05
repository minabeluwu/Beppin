import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./shoppingCart.css";
import ProductCart from "./ProductCart";
import Cost from "../../pages/shoppingCart/Cost";
import OverallPrice from "./OverallPrice";
import { StateContext } from "../../store/context";

export default () => {
  const [total, setTotal] = useState(0);
  const { shoppingCart } = useContext(StateContext);

  useEffect(() => {
    let ShoppingCartAPITotal = [];

    shoppingCart.forEach((producto) => {
      const precio = producto.precio;
      ShoppingCartAPITotal.push(precio);
    });

    if (ShoppingCartAPITotal.length > 0) {
      const sumaTotal = ShoppingCartAPITotal.reduce((a, b) => a + b);
      setTotal(sumaTotal);
    } else {
      setTotal(0);
    }
  }, [shoppingCart]);

  return (
    <>
      <section className="shoppingCart">
        <div className="shoppingCart-flex_container">
          <h2 className="shoppingCart-title_Cart">Cart</h2>
          <div className="shoppingCart-shoppingList">
            {shoppingCart.map(({ id, nombre, precio, img, descripcion }) => (
              <ProductCart
                id={id}
                precio={precio}
                img={img}
                nombre={nombre}
                descripcion={descripcion}
              />
            ))}
          </div>
        </div>

        <div className="cardCost">
          <h2 className="shoppingCart-title_summary">Order summary</h2>
          {shoppingCart.map(({ nombre, precio }) => (
            <Cost nombre={nombre} precio={precio} />
          ))}
          <OverallPrice allPrice precio={total} />

          <Link to={`/Buy`} className="button">
            Buy
          </Link>
        </div>
      </section>
    </>
  );
};
