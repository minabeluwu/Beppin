import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./buy.css";
import { StateContext } from "../../store/context";
import OverallPrice from "../../components/shoppingCart/OverallPrice";

const Buy = () => {
  const { shoppingCart } = useContext(StateContext);
  const [total, setTotal] = useState(0);

  const [input, setInput] = useState("");

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
          <h1 className="summaryBuy-title">Purchase summary</h1>
          <div className="summaryBuy-container">
            <h2 className="count">Count</h2>
            <ul className="count-list">
              {shoppingCart.map(({ nombre, precio }) => (
                <li className="count-item">
                  <div className="count-item-container">
                    <p>{nombre}</p>
                    <p>${precio}</p>
                  </div>
                </li>
              ))}
            </ul>

            <OverallPrice allPrice precio={total} />
          </div>
        </div>

        <div className="invoiceData">
          <h2 className="invoiceData-title">Individual data </h2>

          <form className="invoiceData-form">
            <div className="invoiceData-container">
              <label for="" className="invoiceData-label">
                Name:
              </label>
              <input type="text" className="invoiceData-text" />
            </div>

            <div className="invoiceData-container">
              <label for="" className="invoiceData-label">
                address:
              </label>
              <input type="text" className="invoiceData-text" />
            </div>
            <div className="invoiceData-container">
              <label for="" className="invoiceData-label">
                Phone:
              </label>
              <input type="text" className="invoiceData-text" />
            </div>
            <div className="invoiceData-container">
              <label for="" className="invoiceData-label">
                Email:
              </label>
              <input type="text" className="invoiceData-text" />
            </div>
            <Link to={`/Pay`} className="processButton">
              <input
                type="submit"
                value="Continue"
                className="invoiceData-buttom"
              />
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Buy;
