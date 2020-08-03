import React from "react";
import { Link } from "react-router-dom";
import "../../styles/buy.css";

export default () => {
  return (
    <>
      <section className="buy">
        <div>
          <h1>payment details</h1>

          <p>Banco / medio de pago</p>
          <p>
            Nombre: Ana Maria <br />
            correo: ana34@gmail.com <br />
            direccion: camarones <br />
            tel: +54 911765892
          </p>
        </div>
        <div>
          <h1>purchase data</h1>

          <div>
            <h2>Product</h2>

            <ul>
              <li>name of the product</li>
              <li>name of the product</li>
              <li>name of the product</li>
            </ul>
          </div>

          <div>
            <p>Total price</p>
            <p>$1234</p>
          </div>
        </div>

        <div>
          <Link
            to={`/shoppingCart`}
            style={{
              marginRight: "30px",
              textDecoration: "none",
            }}
          >
            go out
          </Link>

          <Link
            to={`/`}
            style={{
              textDecoration: "none",
            }}
          >
            Buy
          </Link>
        </div>
      </section>
    </>
  );
};
