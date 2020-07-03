import React from "react"
import {
  Link
} from 'react-router-dom'
import "../../styles/header.css"

import shoppingCart from "./../../img/shopping-cart.png"


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

        <Link to={`/shoppingCart`} className="link-shoppingCart">
          <img src={shoppingCart} className="header-shoppingCart"/>
        </Link>

        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-item">
                <Link to={`/product`} className="header-link">
                  Products
                </Link>
            </li>
            <li className="header-item">
              <Link to={`/offers`} className="header-link">
                Offers
              </Link>
            </li>
            <li className="header-item">
              <Link to={`/myShopping`} className="header-link">
                My Shopping
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
