import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { StateContext, DispatchContext } from "../../store/context";
import Cart from "./../../img/ecommerce.svg";
import DrawerToggleButton from "./sideDrawer/DrawerToggleButton";
import SideDrawer from "./sideDrawer/SideDrawer";
import Backdrop from "../../components/backdrop/Backdrop";

const Header = () => {
  const { shoppingCart } = useContext(StateContext);

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <>
      <header className="header">
        <div className="toolbar-buttom">
          <DrawerToggleButton click={drawerToggleClickHandler} />
          <SideDrawer show={sideDrawerOpen} />
          {backdrop}
        </div>

        <Link to={`/`} className="header-logo">
          <h1 className="header-title">Beppin</h1>
        </Link>
        <form className="header-form">
          <input type="search" />
          <button>Search</button>
        </form>
        <nav className="header-nav">
          <div className="container-nav">
            {/* nav list */}
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
              {/* <li className="header-item">
                  <Link to={`/myShopping`} className="header-link">
                    My Shopping
                  </Link>
                </li> */}
            </ul>

            <Link to={`/shoppingCart`} className="link-shoppingCart">
              <img src={Cart} alt="" className="shoppingCart-icon" />
              <span className="shoppingCart-number">{shoppingCart.length}</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
