import React from "react";
import { Link } from "react-router-dom";

export default ({ link, src, name }) => {
  return (
    <>
      <Link to={`/categories${link}`} className="categories-link">
        <img src={src} alt=" " className="categories-img" />
      </Link>

      <p className="categories-content">{name}</p>
    </>
  );
};
