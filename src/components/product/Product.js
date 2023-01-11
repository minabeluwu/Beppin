import React from "react";
import Filtered from "../filtered/Filtered";
import ProductAPIResult from "../../API/ProductAPIResult";
import ProductCard from "./ProductCard";

export default () => {
  // const filteredList = json.productList.filter(product => product.isOnSale )

  return (
    <>
      <section class="listResult">
        <div className="filtered">
          <Filtered />
        </div>

        <div className="result">
          <h2 className="listResult-title">Productos</h2>

          <div className="productCard-container">
            {ProductAPIResult.productList.map(({ id, precio, img, nombre }) => (
              <div className="productCard-card">
                <ProductCard
                  img={img}
                  id={id}
                  precio={precio}
                  nombre={nombre}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
