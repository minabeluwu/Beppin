import React from "react";
import { Link } from "react-router-dom";
import "./sideDrawer.css";

const ToolBar = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul className="sideDrawer-list">
        <li className="sideDrawer-item">
          <Link to={`/product`} className="sideDrawer-link">
            Products
          </Link>
        </li>
        <li className="sideDrawer-item">
          <Link to={`/offers`} className="sideDrawer-link">
            Offers
          </Link>
        </li>
        <li className="sideDrawer-item">
          <Link to={`/myShopping`} className="sideDrawer-link">
            My Shopping
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ToolBar;
