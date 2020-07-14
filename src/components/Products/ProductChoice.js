import React from "react";
import "../../styles/resultProduct.css";
import ProductAPIResult from '../API/ProductAPIResult' 


import top from "../../img/top.jpg";
import top1 from "../../img/top1.jpg";
import top2 from "../../img/top2.jpg";
import top3 from "../../img/top3.jpg";

import { Link } from "react-router-dom";

export default () => {
  
  return (
    <section class="productResult">
      <div className="productResult-images">
        <ul className="productResult-list">
          <li className="productResult-item">
            <a href=" #" className="productResult-link">
              <img src={top1} alt=" " className="productResult-img" />
            </a>
          </li>
          <li className="productResult-item">
            <a href=" #" className="productResult-link">
              <img src={top2} alt=" " className="productResult-img" />
            </a>
          </li>
          <li className="productResult-item">
            <a href=" #" className="productResult-link">
              <img src={top3} alt=" " className="productResult-img" />
            </a>
          </li>
        </ul>
      </div>

      <div className="productResult-box">
        <a href=" #" className="productResult-link">
          <img src={top} alt=" " className="productResult-bigImg" />
        </a>

        <div className="productResult-description">
          <h1 className="productResult-titulo">Top grande</h1>
          <p className="productResult-precio">$290  </p>
          <p className="productResult-descripcion">Description</p>

          <Link to={`/comprar`} className="productResult-boton">
            Buy
          </Link>
          <a href=" #" className="productResult-boton">
            Añadir al carrito
          </a>
        </div>
      </div>
    </section>
  );
};
