import React from "react"
import mujer from "../../img/mujer.png"
import hombre from "../../img/hombre.png"
import niños from "../../img/chico.png"
import bebes from "../../img/baby-boy.png"
import accesorios from "../../img/lentes.png"
import maquillaje from "../../img/maquillaje.png"
import "../../styles/categories.css"
import {
  Link
} from 'react-router-dom'

function Categories() {
  return (
    <section className="categories">
      <h2 className="categories-title">Categorias</h2>

      <div className="categories-container">
        <Link to={`/categorias`} className="categories-card">
            <img src={mujer} alt=" " className="categories-img" />
            <p className="categories-paragraph">Mujeres</p>
        </Link>

        <Link to={`/categorias`} className="categories-card">
          <img src={hombre} alt=" " className="categories-img" />
            <p className="categories-paragraph">Hombres</p>
        </Link>

        <Link to={`/categorias`} className="categories-card">
          <img src={niños} alt=" " className="categories-img" />
          <p className="categories-paragraph">Niños</p>
        </Link>

        <Link to={`/categorias`} className="categories-card">
          <img src={bebes} alt=" " className="categories-img" />
          <p className="categories-paragraph">Bebes</p>
        </Link>
        
        <Link to={`/categorias`} className="categories-card">
          <img src={accesorios} alt=" " className="categories-img" />
          <p className="categories-paragraph">Accesorios</p>
        </Link>
       
        <Link to={`/categorias`} className="categories-card">
          <img src={maquillaje} alt=" " className="categories-img" />
          <p className="categories-paragraph">
            belleza y cuidado <br />
            personal
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Categories
