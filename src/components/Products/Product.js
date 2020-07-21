import React from "react";
import Filtrado from "./Filtered";
import ProductAPIResult from "../API/ProductAPIResult";
import Result from "./Result";
export default () => {
  const isOnSale = "isOnSale";

  if (isOnSale === true) {
    return;
  }

  // const filteredList = json.productList.filter(product => product.isOnSale )

  return (
    <>
      <section class="listResult">
        <div className="filtered">
          <Filtrado />
        </div>

        <div className="result">
          <h2 className="listResult-title">Product</h2>

          <div className="promotions-container">
            {ProductAPIResult.productList.map(
              ({ id, precio, img, descripcion }) => (
                <div className="promotions-card">
                  <Result
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
