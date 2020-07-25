import React from "react";
import Filtered from "../../components/filtered/Filtered";

import "../../styles/listResult.css";
import "../../styles/listProduct.css";

import { Link } from "react-router-dom";

export default () => {
  const json = {
    productList: [
      {
        id: 1,
        nombre: "Mono de tira",
        categoria: "mujer",
        precio: "$352.00",
        descripcion: "Mono de tira de guingán con bolsillo",
        articulo: "Mono",
        img:
          "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346793f9ae5bb0525ed32abd1363ce8cbd7328_thumbnail_900x.webp",

        img1:
          "https://img.ltwebstatic.com/images3_pi/2019/12/26/15773467961df7a64bbe1a6a8347c0682ae03f4040.webp",
        img2:
          "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346787a0d20856934496531505c67232d5a964.webp",
        img3:
          "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346791896107fed1cf209c03f1e1d121867716.webp",
      },
      {
        id: 2,
        nombre: "Mono con estampado",
        categoria: "mujer",
        precio: "$462.00",
        descripcion:
          "Mono capucha con estampado de arte pop con cordón delantero",
        articulo: "Mono",
        img:
          "https://img.ltwebstatic.com/images3_pi/2020/05/09/1589010105943e73317ebbc68064ae5ed8cd2eb09a_thumbnail_900x.webp",

        img1:
          "https://img.ltwebstatic.com/images3_pi/2020/05/09/1589010101f18f68afc484035c3b986dd699ecf942_thumbnail_900x.webp",
        img2:
          "https://img.ltwebstatic.com/images3_pi/2020/05/09/15890100968c22dc62fadd0c9ae9c50aca48c8fbed_thumbnail_900x.webp",
        img3:
          "https://img.ltwebstatic.com/images3_pi/2020/05/09/158901011081108e9524b83c57fcc7eede66550dd5_thumbnail_900x.webp",
      },
    ],
  };

  return (
    <>
      <section class="listResult">
        <div className="filtered">
          <Filtered />
        </div>

        <div className="result">
          <div className="promotions-container">
            <div className="promotions-card">
              <Link to={`/productView`} className="promotions-link">
                <img
                  src={json.productList[0].img}
                  alt=" "
                  className="promotions-img"
                />
              </Link>

              <p className="promociones-content">
                <span>{json.productList[0].precio}</span>
                <br /> {json.productList[0].descripcion}
              </p>
            </div>

            <div className="promotions-card">
              <Link to={`/productView`} className="promotions-link">
                <img
                  src={json.productList[1].img}
                  alt=" "
                  className="promotions-img"
                />
              </Link>

              <p className="promociones-content">
                <span>{json.productList[1].precio}</span>
                <br /> {json.productList[1].descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
