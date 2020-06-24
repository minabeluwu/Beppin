import React from "react"
import {
    Link
  } from 'react-router-dom'

import "../../styles/listResult.css"
import "../../styles/listProduct.css"

import camisetaRejillas from "../../img/camisetaRejillas.jpg"
import camisaHombre from "../../img/camisaDeRayas.jpg"
import ropaNiños from "../../img/enterizoNiña.jpg"
import enterizobebe from "../../img/enterizoB.jpg"
import lentes from "../../img/accesorioL.jpg"
import brochas from "../../img/brochas.jpg"


export default () => {
  return (
    <>
        <section class="listResult">
            <div className="filtered">
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
                <h2 className="listResult-title">Categorias</h2>

                <div className="promotions-container">
                    <div className="promotions-card">
                        <Link to={`/Mujer`} className="promotions-link">
                            <img src={camisetaRejillas} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            Mujer
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/Hombre`} className="promotions-link">
                            <img src={camisaHombre} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            Hombre
                        </p>
                    </div>

                    <div className="promotions-card">

                        <Link to={`/kids`} className="promotions-link">
                            <img src={ropaNiños} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            Niños
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/Bebes`} className="promotions-link">
                            <img src={enterizobebe} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            bebes
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/Accesorios`} className="promotions-link">
                            <img src={lentes} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            accesorios
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/belleza`} className="promotions-link">
                            <img src={brochas} alt=" " className="promotions-img" />
                        </Link>
                        <p className="promociones-content">
                            belleza y cuidado personal
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}