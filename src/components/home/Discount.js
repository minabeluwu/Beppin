import React from "react"
import "../../styles/listProduct.css"

import {
  Link
} from 'react-router-dom' 

function Discount() {

  const json = {
    "productList": [
         {
           "id": 1,
           "nombre": "Tacones Liso",
           "categoria": "mujer",
           "precio": "$414.00",
           "descripcion": "Tacones Liso Negro casual",
           "articulo": "Tacones",
           "img": "https://img.ltwebstatic.com/images3_pi/2019/09/25/156940081991864657f4e18ccde9fea9c61377751b_thumbnail_900x.webp",
           
           "img1": "https://img.ltwebstatic.com/images3_pi/2019/09/25/15694008153a51ca14c8b6fb74756b466de375c03c_thumbnail_900x.webp",
           "img2": "https://www.shein.com.mx/Point-Toe-Ankle-Strap-Chunky-Heels-p-862226-cat-1750.html?scici=navbar_2~~tab01navbar09menu04dir03~~9_4_3~~real_1750~~SPcCccWomenCategory_default~~0~~0",
           "img3": "https://img.ltwebstatic.com/images3_pi/2019/09/25/156940081871de546815d101aa55648bd3094f81c3_thumbnail_900x.webp"
        },
        {
            "id": 2,
            "nombre": "Zapatillas rosas",
            "categoria": "mujer",
            "precio": "$462.00",
            "descripcion": "Zapatillas Deportivas",
            "articulo": "zapatillas",
            "img": "https://img.ltwebstatic.com/images2_pi/2019/08/14/15657719092340174009_thumbnail_900x1199.webp",

            "img1": "https://img.ltwebstatic.com/images2_pi/2019/08/14/15657719073184418673_thumbnail_900x1199.webp",
            "img2": "https://img.ltwebstatic.com/images2_pi/2019/08/14/1565771908465452872_thumbnail_900x1199.webp",
            "img3": "https://img.ltwebstatic.com/images2_pi/2019/08/14/15657719081865841580_thumbnail_900x1199.webp"
         },
         {
          "id": 3,
          "nombre": "Tacones gruesos",
          "categoria": "mujer",
          "precio": "$775.00",
          "descripcion": "Tacones gruesos con plataforma",
          "articulo": "Tacones",
          "img": "https://img.ltwebstatic.com/images3_pi/2020/05/05/1588650041a8ab5e9956e3968fec536879b735c580_thumbnail_900x.webp",

          "img1": "https://img.ltwebstatic.com/images3_pi/2020/05/05/158865004816b05f95c919b3a370ab8fe7f63d82ef_thumbnail_900x.webp",
          "img2": "https://img.ltwebstatic.com/images3_pi/2020/05/05/1588650055f900e5e220ff5a72e61d189b08e2e76b_thumbnail_900x.webp",
          "img3": "https://img.ltwebstatic.com/images3_pi/2020/05/05/1588650062ef453ce307daac07918fbead9e35c3b8_thumbnail_900x.webp"
       },
       {
        "id": 4,
        "nombre": "Botas de combate",
        "categoria": "mujer",
        "precio": "$866.00",
        "descripcion": "Botas de combate de suela lug",
        "articulo": "Botas",
        "img": "https://img.ltwebstatic.com/images3_pi/2019/11/04/1572853134d1636ca54b7ee4af1d7f65c78bbea258_thumbnail_900x.webp",

        "img1": "https://img.ltwebstatic.com/images3_pi/2019/11/04/15728531380114e9c1822dfe9f0a8006dfb5205a94_thumbnail_900x.webp",
        "img2": "https://img.ltwebstatic.com/images3_pi/2019/11/04/1572853141b46c14e1dfb9f13b00d1d64250f0773d_thumbnail_900x.webp",
        "img3": "https://img.ltwebstatic.com/images3_pi/2019/11/04/1572853145e640df4f58ea81dcb6f7d04e75477f67_thumbnail_900x.webp"
     }

    ]
}

  return (
    <section className="promotions">
      <h1 className="promotions-title">Discount</h1>

      <div className="promotions-container">
        <div className="promotions-card">
          <Link to={`/productView`} className="promotions-link">
            <img src={json.productList[0].img} alt=" " className="promotions-img" />
          </Link>

          <p className="promociones-content">
            <span>{json.productList[0].precio}</span>
            <br /> {json.productList[0].descripcion}
          </p>
        </div>

        <div className="promotions-card">
          <Link to={`/productView`} className="promotions-link"> 
            <img src={json.productList[1].img} alt=" " className="promotions-img" />
          </Link>

          <p className="promociones-content">
            <span>{json.productList[1].precio}</span>
            <br /> {json.productList[1].descripcion}
          </p>
        </div>

        <div className="promotions-card">
          <Link to={`/productView`} className="promotions-link">
            <img src={json.productList[2].img} alt=" " className="promotions-img" />
          </Link>

          <p className="promociones-content">
            <span>{json.productList[2].precio}</span>
            <br /> {json.productList[2].descripcion}
          </p>
        </div>

        <div className="promotions-card">
          <Link to={`/productView`} className="promotions-link">
            <img src={json.productList[3].img} alt=" " className="promotions-img" />
          </Link>

          <p className="promociones-content">
            <span>{json.productList[3].precio}</span>
            <br /> {json.productList[3].descripcion}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Discount
