import React from "react"
import Filtrado from "./Filtered"
import {Link} from 'react-router-dom' 

export default () => {
    
      const isOnSale = "isOnSale"

      if (isOnSale === true) {
          return 
      }
      
    // const filteredList = json.productList.filter(product => product.isOnSale )
    

    const json = {
        "productList": [
             {
               "id": 1,
               "isOnSale": false,
               "nombre": "Top corto",
               "categoria": "mujer",
               "precio": "$160.00",
               "descripcion": "Top corto",
               "articulo": "Top de mujer",
               "img": "https://img.ltwebstatic.com/images3_pi/2020/06/03/1591148522ae4937ce0adb4cf29df1c8f285030546_thumbnail_900x.webp",
               
               "img1": "https://img.ltwebstatic.com/images3_pi/2020/06/03/1591148526ecd4fa44cc8d194591beb85626d6b26d_thumbnail_900x.webp",
               "img2": "https://img.ltwebstatic.com/images3_pi/2020/06/03/15911485307acc54dcdef41d87683fcf9ee34d51eb_thumbnail_900x.webp",
               "img3": "https://img.ltwebstatic.com/images3_pi/2020/06/03/15911485383400b4aa193c1b72e02c0d91d5889bdc_thumbnail_900x.webp"
            },
            {
                "id": 2,
                "isOnSale": false,
                "nombre": "Camiseta negra con diseño",
                "categoria": "mujer",
                "precio": "$267.00",
                "descripcion": "Camiseta con estampado",
                "articulo": "Top de mujer",
                "img": "https://img.ltwebstatic.com/images3_pi/2020/05/12/15892698706e807ae753386cb7fc0ded418c66f76a_thumbnail_900x.webp",
    
                "img1": "https://img.ltwebstatic.com/images3_pi/2020/05/12/1589269868e1dbfbdf82f475098d8cf598f3801b1e_thumbnail_900x.webp",
                "img2": "https://img.ltwebstatic.com/images3_pi/2020/05/12/15892698636f22784d87015f2a4fd6d711bfec8c71_thumbnail_900x.webp",
                "img3": "https://img.ltwebstatic.com/images3_pi/2020/05/12/1589269861cf582b3ed9b934fbc0bc2d2c0de1f1c3_thumbnail_900x.webp"
             },
             {
                "id": 3,
                "isOnSale": true,
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
                 "id": 4,
                 "isOnSale": true,
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
               "id": 5,
               "isOnSale": true,
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
            {
             "id": 6,
             "isOnSale": true,
             "nombre": "Falda denim",
             "categoria": "mujer",
             "precio": "$340.00",
             "descripcion": "Falda denim rota bajo crudo",
             "articulo": "Falda",
             "img": "https://img.ltwebstatic.com/images2_pi/2019/06/25/15614498534145937621_thumbnail_900x1199.webp",
     
             "img1": "https://img.ltwebstatic.com/images2_pi/2019/06/25/15614498533250024442_thumbnail_900x1199.webp",
             "img2": "https://img.ltwebstatic.com/images2_pi/2019/06/25/15614498521208463229_thumbnail_900x1199.webp",
             "img3": "https://img.ltwebstatic.com/images2_pi/2019/06/25/15614498524190891998_thumbnail_900x1199.webp"
          },
          {
            "id": 7,
            "isOnSale": false,
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
             "id": 8,
             "isOnSale": false,
             "nombre": "Mono con estampado",
             "categoria": "mujer",
             "precio": "$462.00",
             "descripcion": "Mono capucha con estampado de arte pop con cordón delantero",
             "articulo": "Mono",
             "img": "https://img.ltwebstatic.com/images3_pi/2020/05/09/1589010105943e73317ebbc68064ae5ed8cd2eb09a_thumbnail_900x.webp",
 
             "img1": "https://img.ltwebstatic.com/images3_pi/2020/05/09/1589010101f18f68afc484035c3b986dd699ecf942_thumbnail_900x.webp",
             "img2": "https://img.ltwebstatic.com/images3_pi/2020/05/09/15890100968c22dc62fadd0c9ae9c50aca48c8fbed_thumbnail_900x.webp",
             "img3": "https://img.ltwebstatic.com/images3_pi/2020/05/09/158901011081108e9524b83c57fcc7eede66550dd5_thumbnail_900x.webp"
          }
        ],
    }
   

  return (
    <>
    <section class="listResult">
            <div className="filtered">
               <Filtrado/>
            </div>

            <div className="result">
                <h2 className="listResult-title">Product</h2>

                <div className="promotions-container">
                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={json.productList[0].img} alt=" " className="promotions-img" />
                        </Link>
                        
                        <p className="promociones-content">
                        <span>{json.productList[0].precio}</span>
                        <br />{json.productList[0].descripcion}
                        </p>    
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={json.productList[1].img} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                        <span>{json.productList[1].precio}</span>
                        <br />{json.productList[1].descripcion}
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

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={json.productList[4].img} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>{json.productList[4].precio}</span>
                            <br /> {json.productList[4].descripcion}
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={json.productList[5].img} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>{json.productList[5].precio}</span>
                            <br /> {json.productList[5].descripcion}
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={json.productList[6].img} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>{json.productList[6].precio}</span>
                            <br /> {json.productList[6].descripcion}
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={json.productList[7].img} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>{json.productList[7].precio}</span>
                            <br /> {json.productList[7].descripcion}
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    </>
 
  )
}