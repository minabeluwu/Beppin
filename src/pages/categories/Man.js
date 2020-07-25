import React from "react";
import Filtered from "../../components/filtered/Filtered";
import ProductAPIResult from "../../API/ProductAPIResult";
import ProductCart from "../../components/product/ProductCard";

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
              .filter((product) => product.categoria === "hombre")
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
