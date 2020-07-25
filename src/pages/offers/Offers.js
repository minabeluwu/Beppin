import React from "react";
import "../../styles/listProduct.css";
import Filtered from "../../components/filtered/Filtered";
import ProductCard from "../../components/product/ProductCard";
import ProductAPIResult from "../../API/ProductAPIResult";

const Offers = ({ img, precio, descripcion, id }) => {
  return (
    <>
      <section class="listResult">
        <div className="filtered">
          <Filtered />
        </div>

        <div className="result">
          <h2 className="listResult-title">Offers</h2>

          <div className="promotions-container">
            {ProductAPIResult.productList
              .filter((product) => product.isOnSale)
              .map(({ descripcion, precio, img, id }) => (
                <div className="promotions-card">
                  <ProductCard
                    descripcion={descripcion}
                    precio={precio}
                    img={img}
                    id={id}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Offers;
