import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../store/context";
import OverallPrice from "../../components/shoppingCart/OverallPrice";
import "../../styles/buy.css";

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
              {shoppingCart.map(({ nombre, precio }) => (
                <li className="count-item">
                  {nombre} - ${precio}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p>Total price</p>
            <OverallPrice allPrice precio={total} />
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

export default Summary;
