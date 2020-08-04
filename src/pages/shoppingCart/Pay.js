import React from "react";
import { Link } from "react-router-dom";
import "../../styles/buy.css";

export default () => {
  return (
    <>
      <section className="buy">
        <div>
          <h1>Tipo de pago</h1>

          <form>
            <label for="" className="invoiceData-label">
              account number
            </label>
            <input type="text" className="invoiceData-text" />

            <label for="" className="invoiceData-label">
              verification code
            </label>
            <input type="text" className="invoiceData-text" />
          </form>

          <div className="midPayment">
            <h2 className="midPayment-title">Payment method</h2>
            <form action="" className="midPayment-form">
              <div className="checkbox-container">
                <input type="checkbox" className="midPayment-checkbox" />
                <label for="" className="midPayment-label">
                  Visa
                </label>
              </div>

              <div className="checkbox-container">
                <input type="checkbox" className="midPayment-checkbox" />
                <label for="" className="midPayment-label">
                  Debito
                </label>
              </div>

              <div className="checkbox-container">
                <input type="checkbox" className="midPayment-checkbox" />
                <label for="" className="midPayment-label">
                  Master
                </label>
              </div>

              <div className="checkbox-container">
                <input type="checkbox" className="midPayment-checkbox" />
                <label for="" className="midPayment-label">
                  Sele
                </label>
              </div>
            </form>
          </div>

          <p>
            date: <br /> 18/07/2020
          </p>
          <p>
            Name: <br /> Ana Maria
          </p>
          <div className="processButton">
            <Link
              to={`/summary`}
              className="invoiceData-buttom"
              style={{ textDecoration: "none" }}
            >
              Continue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
