import React from "react";
import menu from "../../../img/menu.svg";
import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => {
  return (
    <button className="menu-button" onClick={props.click}>
      <img src={menu} alt="" className="menu-icon" />
    </button>
  );
};

export default DrawerToggleButton;
