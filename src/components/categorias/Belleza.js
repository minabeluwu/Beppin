import React from "react"

import "../../styles/listResult.css"
import "../../styles/listProduct.css"
import brochasUnicornio from "../../img/brochasUnicornio.jpg"

import {
    Link
  } from 'react-router-dom' 

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

                    <h2 className="filtered-title">Categorias</h2>
                    <ul className="filtered-list">
                        <li className="filtered-item">
                            <a href=" #" className="filtered-link">
                                Maquillaje
                            </a>
                        </li>
                        <li className="filtered-item">
                            <a href=" #" className="filtered-link">
                                accesorios de belleza
                            </a>
                        </li>
                        <li className="filtered-item">
                            <a href=" #" className="filtered-link">
                                Cuidado para la piel
                            </a>
                        </li>
                        <li className="filtered-item">
                            <a href=" #" className="filtered-link">
                                ...
                            </a>
                        </li>
                    </ul>
            </div>

            <div className="result">

                <div className="promotions-container">
                    <div className="promotions-card">
                        <Link to={`/producto`} className="promotions-link">
                            <img src={brochasUnicornio} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Descripcion de producto
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/producto`} className="promotions-link">
                            <img src={brochasUnicornio} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Descripcion de producto
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/producto`} className="promotions-link">
                            <img src={brochasUnicornio} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Descripcion de producto
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/producto`} className="promotions-link">
                            <img src={brochasUnicornio} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Descripcion de producto
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/producto`} className="promotions-link">
                            <img src={brochasUnicornio} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Descripcion de producto
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/producto`} className="promotions-link">
                            <img src={brochasUnicornio} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Descripcion de producto
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}