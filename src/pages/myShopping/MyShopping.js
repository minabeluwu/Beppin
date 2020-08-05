import React from "react";
import Filtered from "../../components/filtered/Filtered";
import ProductCard from "../../components/product/ProductCard";
import ProductAPIResult from "../../API/ProductAPIResult";

export default () => {
  return (
    <>
      <section class="listResult">
        <div className="filtered">
          <Filtered />
        </div>

        <div className="result">
          <h2 className="listResult-title">My Shopping</h2>

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
