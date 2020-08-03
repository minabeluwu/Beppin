import React, { useContext } from "react";

import { Link } from "react-router-dom";
import "../../styles/buy.css";
import { StateContext } from "../../store/context";

const Buy = () => {
  const { shoppingCart } = useContext(StateContext);

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
                  {nombre} - ${precio}
                </li>
              ))}
            </ul>

            <p className="overallPrice">
              <span>overall price</span>
              $432000
            </p>
          </div>
        </div>

        <div className="invoiceData">
          <h2 className="invoiceData-title">Individual data </h2>

          <form className="invoiceData-form">
            <div className="invoiceData-container">
              <label for="" className="invoiceData-label">
                Name
              </label>
              <input type="text" className="invoiceData-text" />
            </div>

            <div className="invoiceData-container">
              <label for="" className="invoiceData-label">
                address
              </label>
              <input type="text" className="invoiceData-text" />
            </div>
            <div className="invoiceData-container">
              <label for="" className="invoiceData-label">
                Number
              </label>
              <input type="text" className="invoiceData-text" />
            </div>
            <div className="invoiceData-container">
              <label for="" className="invoiceData-label">
                Email
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
