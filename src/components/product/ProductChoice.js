import React, { useEffect, useState, useContext } from "react";
import "../../styles/resultProduct.css";
import ProductAPIResult from "../../API/ProductAPIResult";

import { Link, useParams } from "react-router-dom";
import { DispatchContext } from "../../store/context";

const controller = new AbortController();
const signal = controller.signal;

const ProductChoice = () => {
  const [product, setProduct] = useState({});
  const dispatch = useContext(DispatchContext);

  // aqui se define que id = useParams
  const { id } = useParams();

  useEffect(() => {
    // se hace la simulacion de un fetch
    setTimeout(() => {
      const elProduct = ProductAPIResult.productList.find(
        // hace una iteracion del objeto y busca product.id, que va a ser igual a un tipo de dato number
        (product) => product.id === parseInt(id)
      );
      // se setea al estado
      setProduct(elProduct);
    }, 1000);

    // fetch({ url: `htttp://mibackend.com/product/${id}` }, { signal: signal })
    //   .then((res) => res.json())
    //   .then((data) => setProduct(data));
    // cuando se deja de usar el componete aborta el proceso
    return () => {
      // controller.abort();
    };
  }, [id]);

  if (
    (typeof product === "object" && Object.entries(product).length) === 0 ||
    product === undefined
  )
    return <h1> Loading....</h1>;

  return (
    <section class="productResult">
      <div className="productResult-images">
        <ul className="productResult-list">
          <li className="productResult-item">
            <a href=" #" className="productResult-link">
              <img
                src={product.imgVistaTres}
                alt=" "
                className="productResult-img"
              />
            </a>
          </li>
          <li className="productResult-item">
            <a href=" #" className="productResult-link">
              <img
                src={product.imgVistaDos}
                alt=" "
                className="productResult-img"
              />
            </a>
          </li>
          <li className="productResult-item">
            <a href=" #" className="productResult-link">
              <img
                src={product.imgVista}
                alt=" "
                className="productResult-img"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="productResult-box">
        <a href=" #" className="productResult-link">
          <img src={product.img} alt=" " className="productResult-bigImg" />
        </a>

        <div className="productResult-description">
          <h1 className="productResult-titulo"> {product.nombre} </h1>
          <p className="productResult-precio">${product.precio} </p>
          <p className="productResult-descripcion">{product.descripcion}</p>

          <Link to={`/comprar`} className="productResult-boton">
            Buy
          </Link>
          <button
            className="productResult-boton"
            onClick={() =>
              dispatch({ type: "ADD_ITEM_TO_SHOPPINGCART", payload: product })
            }
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductChoice;
