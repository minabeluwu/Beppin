import React from "react";

import ProductAPIResult from "../../API/ProductAPIResult";
import ProductCart from "../../components/product/ProductCard";
import Filtered from "../../components/filtered/Filtered";

export default () => {
  return (
    <>
      <section class="listResult">
        <div className="filtered">
          <Filtered />
        </div>

        <div className="result">
          <div className="promotions-container">
            {ProductAPIResult.productList
              .filter((product) => product.categoria === "bebe")
              .map(({ id, precio, img, descripcion }) => (
                <div className="promotions-card">
                  <ProductCart
                    img={img}
                    id={id}
                    precio={precio}
                    descripcion={descripcion}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
