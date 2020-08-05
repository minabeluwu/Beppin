import React from "react";
import { Link } from "react-router-dom";
import "./buy.css";
import "./pay.css";

export default () => {
  return (
    <>
      <section className="buy">
        <div className="summaryBuy">
          <h1 className="summaryBuy-title">Type of payment</h1>

          <form className="pay-form">
            <label for="" className="invoiceData-label">
              account number:
            </label>
            <input type="text" className="invoiceData-text" />

            <label for="" className="invoiceData-label">
              verification code:
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

          <div className="pay-date-container">
            <p className="pay-date">
              <span>Date:</span> 18/07/2020
            </p>
            <p className="pay-date">
              <span>Name:</span> Ana Maria
            </p>
          </div>

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
