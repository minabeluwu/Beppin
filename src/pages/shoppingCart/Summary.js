import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../store/context";
import OverallPrice from "../../components/shoppingCart/OverallPrice";
import "./buy.css";
import "./summary.css";

const Summary = () => {
  const { shoppingCart } = useContext(StateContext);
  const [total, setTotal] = useState(0);

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
      <section className="buy">
        <div className="summaryBuy">
          <h1 className="summaryBuy-title">payment details</h1>

          <p className="payment-paragraph">Bank / Means of payment</p>
          <p className="payment-paragraph">
            Name: Ana Maria <br />
            Email: ana34@gmail.com <br />
            Address: camarones <br />
            Phone: +54 911765892
          </p>
        </div>
        <div>
          <h1 className="summaryBuy-title">purchase data</h1>

          <div className="payment-product">
            <h2 className="payment-product_title">Product</h2>

            <ul className="payment-product_list">
              {shoppingCart.map(({ nombre, precio }) => (
                <li className="payment-product_item">
                  {nombre} - ${precio}
                </li>
              ))}
            </ul>
          </div>

          <OverallPrice allPrice precio={total} />
        </div>

        <div className="payment-bottom">
          <Link
            to={`/shoppingCart`}
            style={{
              marginRight: "30px",
              textDecoration: "none",
            }}
            className="payment-bottom_goOut"
          >
            go out
          </Link>

          <Link
            to={`/`}
            style={{
              textDecoration: "none",
            }}
            className="payment-bottom_buy"
          >
            Buy
          </Link>
        </div>
      </section>
    </>
  );
};

export default Summary;
