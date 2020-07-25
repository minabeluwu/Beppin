import React from "react";
import Filtered from "../filtered/Filtered";
import ProductAPIResult from "../../API/ProductAPIResult";
import ProductCart from "./ProductCard";

export default () => {
  // const filteredList = json.productList.filter(product => product.isOnSale )

  return (
    <>
      <section class="listResult">
        <div className="filtered">
          <Filtered />
        </div>

        <div className="result">
          <h2 className="listResult-title">Product</h2>

          <div className="promotions-container">
            {ProductAPIResult.productList.map(
              ({ id, precio, img, descripcion }) => (
                <div className="promotions-card">
                  <ProductCart
                    img={img}
                    id={id}
                    precio={precio}
                    descripcion={descripcion}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};
