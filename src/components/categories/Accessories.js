import React from "react"
import Filtered from "../Products/Filtered"
import "../../styles/listResult.css"
import "../../styles/listProduct.css"
import glasses from "../../img/gafas.jpg"

import {
    Link
  } from 'react-router-dom' 

export default () => {
  return (
    <>
        <section class="listResult">
            <div className="filtered">
                <Filtered/>
            </div>

            <div className="result">

                <div className="promotions-container">
                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={glasses} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Product description
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={glasses} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Product description
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={glasses} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Product description
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={glasses} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Product description
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={glasses} alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Product description
                        </p>
                    </div>

                    <div className="promotions-card">
                        <Link to={`/productView`} className="promotions-link">
                            <img src={glasses   } alt=" " className="promotions-img" />
                        </Link>

                        <p className="promociones-content">
                            <span>$180</span>
                            <br /> Product description
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}