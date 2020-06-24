import React from "react"
import "../../styles/listResult.css"
import "../../styles/listProduct.css"

import {Link} from 'react-router-dom' 

export default () => {

    const json = {
        "productList": [
             {
               "id": 1,
               "nombre": "Capucha corta",
               "categoria": "mujer",
               "precio": "$463.00",
               "descripcion": "Capucha corta con cordón de Tie Dye",
               "articulo": "sudadera",
               "img": "https://img.ltwebstatic.com/images3_pi/2020/06/03/1591151644412bb7221af4a7d1746e18f8e150f99d_thumbnail_900x.webp",
               
               "img1": "https://img.ltwebstatic.com/images3_pi/2020/06/03/15911516535df5c093b41d22e4480647915762a5fd_thumbnail_900x.webp",
               "img2": "https://img.ltwebstatic.com/images3_pi/2020/06/03/159115164907e8336c6206192bd214477241b1bbd6_thumbnail_900x.webp",
               "img3": "https://img.ltwebstatic.com/images3_pi/2020/06/03/15911516575c59f71621d4744c85f9664711f00a14_thumbnail_900x.webp"
            },
            {
                "id": 2,
                "nombre": "Sudadera",
                "categoria": "mujer",
                "precio": "$266.00",
                "descripcion": "Sudadera con capucha corta bajo con cordón",
                "articulo": "sudadera",
                "img": "https://img.ltwebstatic.com/images2_pi/2019/06/26/15615408183325162215_thumbnail_900x1199.webp",
    
                "img1": "https://img.ltwebstatic.com/images2_pi/2019/06/26/1561540818588095321_thumbnail_900x1199.webp",
                "img2": "https://img.ltwebstatic.com/images2_pi/2019/06/26/1561540819210684602_thumbnail_900x1199.webp",
                "img3": "https://img.ltwebstatic.com/images2_pi/2019/06/26/1561540818384062308_thumbnail_900x1199.webp"
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
                <h2 className="listResult-title">Lista de Resultados</h2>

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
                </div>
            </div>
            
        </section>
    </>
  )
}