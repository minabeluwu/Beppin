import React from "react";
import "./categories.css";
import CategoriesAPIResults from "../../API/CategoriesAPIResults";
import CategoriesCard from "./CategoriesCard";

export default () => {
  return (
    <>
      <section className="categories">
        <div className="categories-size">
          <h2 className="categories-title">Categories</h2>

          <div className="categories-container">
            {CategoriesAPIResults.categoriesList.map(({ link, src, name }) => (
              <div className="categories-card">
                <CategoriesCard link={link} src={src} name={name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
