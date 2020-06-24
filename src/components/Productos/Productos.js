import React from "react"

import {Link} from 'react-router-dom' 

export default () => {

    const json = {
        "productList": [
             {
               "id": 1,
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
                "nombre": "Camiseta negra con diseño",
                "categoria": "mujer",
                "precio": "$267.00",
                "descripcion": "Camiseta con estampado",
                "articulo": "Top de mujer",
                "img": "https://img.ltwebstatic.com/images3_pi/2020/05/12/15892698706e807ae753386cb7fc0ded418c66f76a_thumbnail_900x.webp",
    
                "img1": "https://img.ltwebstatic.com/images3_pi/2020/05/12/1589269868e1dbfbdf82f475098d8cf598f3801b1e_thumbnail_900x.webp",
                "img2": "https://img.ltwebstatic.com/images3_pi/2020/05/12/15892698636f22784d87015f2a4fd6d711bfec8c71_thumbnail_900x.webp",
                "img3": "https://img.ltwebstatic.com/images3_pi/2020/05/12/1589269861cf582b3ed9b934fbc0bc2d2c0de1f1c3_thumbnail_900x.webp"
             }
        ]
    }
   

  return (
    <>
    <section class="listResult">
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

                    <h2 className="filtered-title">Filtrado</h2>
                    <ul className="filtered-list">
                        <li className="filtered-item">
                            <a href=" #" className="filtered-link">
                                Filtrado #1
                            </a>
                        </li>
                        <li className="filtered-item">
                            <a href=" #" className="filtered-link">
                                Filtrado #2
                            </a>

                        </li>
                        <li className="filtered-item">
                            <a href=" #" className="filtered-link">
                                Filtrado #3
                            </a>
                        </li>
                    </ul>
            </div>

            <div className="result">
                <h2 className="listResult-title">Productos</h2>

                <div className="promotions-container">
                    <div className="promotions-card">
                        <Link to={`/producto`} className="promotions-link">
                            <img src={json.productList[0].img} alt=" " className="promotions-img" />
                        </Link>
                        
                        <p className="promociones-content">
                        <span>{json.productList[0].precio}</span>
                        <br />{json.productList[0].descripcion}
                        </p>    
                    </div>

                    <div className="promotions-card">
                        <Link to={`/producto`} className="promotions-link">
                            <img src={json.productList[1].img} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                        <span>{json.productList[1].precio}</span>
                        <br />{json.productList[1].descripcion}
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    </>
 
  )
}