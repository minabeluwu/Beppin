import React, { useEffect, useState, useContext } from "react";
import "./resultProduct.css";
import ProductAPIResult from "../../API/ProductAPIResult";

import { Link, useParams } from "react-router-dom";
import { DispatchContext, StateContext } from "../../store/context";
import Modal from "../modal/Modal";
import loading from "../../img/loading.svg";

const controller = new AbortController();
const signal = controller.signal;

const ProductChoice = () => {
  const [open, setOpen] = useState(false);

  const abrirModal = () => {
    setOpen(!open);
  };

  const state = useContext(StateContext);
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
    return (
      <h1 className="messenge_loading">
        {" "}
        <img src={loading} alt="" className="messenge_loading-img" />
      </h1>
    );

  return (
    <section className="productResult">
      <Modal isOpen={state.modalIsOpen} />

      <div className="productResult-images">
        <ul className="productResult-list">
          <li className="productResult-item">
            <img
              src={product.imgVistaTres}
              alt=" "
              className="productResult-img"
            />
          </li>
          <li className="productResult-item">
            <img
              src={product.imgVistaDos}
              alt=" "
              className="productResult-img"
            />
          </li>
          <li className="productResult-item">
            <img src={product.imgVista} alt=" " className="productResult-img" />
          </li>
        </ul>
        <img src={product.img} alt=" " className="productResult-bigImg" />
      </div>

      <div className="productResult-box">
        <h1 className="productResult-title"> {product.nombre} </h1>
        <p className="productResult-description">{product.descripcion}</p>
        <p className="productResult-price">${product.precio} </p>

        <div className="productResult-container">
          <Link to={`/buy`} className="productResult-botonLink">
            Buy now
          </Link>
          <button
            className="productResult-boton"
            onClick={() => {
              dispatch({
                type: "ADD_ITEM_TO_SHOPPINGCART",
                payload: product,
              });
              dispatch({
                type: "OPEN_MODAL",
              });
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductChoice;
