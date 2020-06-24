import React from "react"

import {
  Link
} from 'react-router-dom' 

export default () => {

  const json = {
    "productList": [
         {
           "id": 1,
           "nombre": "Mono de tira",
           "categoria": "mujer",
           "precio": "$352.00",
           "descripcion": "Mono de tira de guingán con bolsillo",
           "articulo": "Mono",
           "img": "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346793f9ae5bb0525ed32abd1363ce8cbd7328_thumbnail_900x.webp",
           
           "img1": "https://img.ltwebstatic.com/images3_pi/2019/12/26/15773467961df7a64bbe1a6a8347c0682ae03f4040.webp",
           "img2": "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346787a0d20856934496531505c67232d5a964.webp",
           "img3": "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346791896107fed1cf209c03f1e1d121867716.webp"
        },
        {
            "id": 2,
            "nombre": "Mono con estampado",
            "categoria": "mujer",
            "precio": "$462.00",
            "descripcion": "Mono capucha con estampado de arte pop con cordón delantero",
            "articulo": "Mono",
            "img": "https://img.ltwebstatic.com/images3_pi/2020/05/09/1589010105943e73317ebbc68064ae5ed8cd2eb09a_thumbnail_900x.webp",

            "img1": "https://img.ltwebstatic.com/images3_pi/2020/05/09/1589010101f18f68afc484035c3b986dd699ecf942_thumbnail_900x.webp",
            "img2": "https://img.ltwebstatic.com/images3_pi/2020/05/09/15890100968c22dc62fadd0c9ae9c50aca48c8fbed_thumbnail_900x.webp",
            "img3": "https://img.ltwebstatic.com/images3_pi/2020/05/09/158901011081108e9524b83c57fcc7eede66550dd5_thumbnail_900x.webp"
         },
         {
          "id": 3,
          "nombre": "Chaqueta denim",
          "categoria": "mujer",
          "precio": "$545.00",
          "descripcion": "Chaqueta denim bajo crudo con estampado de camuflaje",
          "articulo": "chaqueta",
          "img": "https://img.ltwebstatic.com/images3_pi/2020/01/16/157916596034d273fbbe04380286af8e968ad91eac_thumbnail_900x.webp",

          "img1": "https://img.ltwebstatic.com/images3_pi/2020/01/16/1579165965aaddfa334e51072b8efe5d640e6aa835_thumbnail_900x.webp",
          "img2": "https://img.ltwebstatic.com/images3_pi/2020/01/16/15791659699b1cf3330f2f919abdab6a275382adba_thumbnail_900x.webp",
          "img3": "https://img.ltwebstatic.com/images3_pi/2020/01/16/1579165973bf7ec555831056bbddd5c96c7792ea6e_thumbnail_900x.webp"
       },

    ]
}

  return (
    <>
    <section class="compra">

      <div className="compra-container">
        <h2 className="listResult-title">Compra</h2>

        <div className="container">
          <div>
              <h3 className="promotions-container">Carrito</h3>

                <div className="promotions-container">
                  <div className="promotions-card">
                    <Link to={`/producto`} className="promotions-link">
                        <img src={json.productList[0].img} alt=" " className="promotions-img" />
                    </Link>

                    <p className="promociones-content">
                        <span>{json.productList[0].precio}</span>
                        <br /> {json.productList[0].descripcion}
                    </p>
                  </div>

                  <div className="promotions-card">
                      <Link to={`/producto`} className="promotions-link">
                          <img src={json.productList[1].img} alt=" " className="promotions-img" />
                      </Link>

                      <p className="promociones-content">
                          <span>{json.productList[1].precio}</span>
                          <br /> {json.productList[1].descripcion}
                      </p>
                  </div>
                  <div className="promotions-card">
                      <Link to={`/producto`} className="promotions-link">
                          <img src={json.productList[2].img} alt=" " className="promotions-img" />
                      </Link>

                      <p className="promociones-content">
                          <span>{json.productList[2].precio}</span>
                          <br /> {json.productList[2].descripcion}
                      </p>
                  </div>
            </div>
          </div>

          <div>
            <h3>Resumen del pedido</h3>
            <div className="filtered">

              <h2 className="filtered-title">Categoria</h2>

              <ul className="filtered-list">
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Categoria #1
                    </a>
                </li>
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Categoria #2
                    </a>
                </li>
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Categoria #3
                    </a>
                </li>
              </ul>

            </div>

          </div>
        </div>
      </div>
            
      </section>
    </>
 
  )
}