import React from "react"

import {
    Link
  } from 'react-router-dom'

import "../../styles/categories.css"

import camisetaRejillas from "../../img/camisetaRejillas.jpg"
import camisaHombre from "../../img/camisaDeRayas.jpg"
import ropaNiños from "../../img/enterizoNiña.jpg"
import enterizobebe from "../../img/enterizoB.jpg"
import lentes from "../../img/accesorioL.jpg"
import brochas from "../../img/brochas.jpg"
            

export default () => {
  return (
    <>
        <section class="categories">
            <div className="categories-size">
                <h2 className="categories-title">Categories</h2>

                <div className="categories-container">
                    <div className="categories-card">
                        <Link to={`/woman`} className="categories-link">
                            <img src={camisetaRejillas} alt=" " className="categories-img" />
                        </Link>

                        <p className="categories-content">
                            Woman
                        </p>
                    </div>

                    <div className="categories-card">
                        <Link to={`/man`} className="categories-link">
                            <img src={camisaHombre} alt=" " className="categories-img" />
                        </Link>

                        <p className="categories-content">
                            Man
                        </p>
                    </div>

                    <div className="categories-card">

                        <Link to={`/kids`} className="categories-link">
                            <img src={ropaNiños} alt=" " className="categories-img" />
                        </Link>

                        <p className="categories-content">
                            Kids
                        </p>
                    </div>

                    <div className="categories-card">
                        <Link to={`/babies`} className="categories-link">
                            <img src={enterizobebe} alt=" " className="categories-img" />
                        </Link>

                        <p className="categories-content">
                            Babies
                        </p>
                    </div>

                    <div className="categories-card">
                        <Link to={`/accessories`} className="categories-link">
                            <img src={lentes} alt=" " className="categories-img" />
                        </Link>

                        <p className="categories-content">
                            accessories
                        </p>
                    </div>

                    <div className="categories-card">
                        <Link to={`/beauty`} className="categories-link">
                            <img src={brochas} alt=" " className="categories-img" />
                        </Link>
                        <p className="categories-content">
                            beauty and personal care
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}