import React from "react"
import {
  Link
} from 'react-router-dom'
import "../../styles/header.css"


function Header() {

  return (
    <>
      <header className="header">
      <Link to={`/`} className="header-link">
        <h1 className="header-title">Beppin</h1>
      </Link>
        
        <form className="header-form">
          <input type="search" />
          <button>Search</button>
        </form>

        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-item">
                <Link to={`/Categorias`} className="header-link">
                  Categorias
                </Link>
            </li>
            <li className="header-item">
                <Link to={`/Productos`} className="header-link">
                  Productos
                </Link>
            </li>
            <li className="header-item">
              <Link to={`/ofertas`} className="header-link">
                  Ofertas
              </Link>
            </li>
            <li className="header-item">
              <Link to={`/misCompras`} className="header-link">
                Mis compras
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
