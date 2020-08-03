import React from "react";
import Filtered from "../../components/filtered/Filtered";
import ProductCard from "../../components/product/ProductCard";
import ProductAPIResult from "../../API/ProductAPIResult";

const Offers = () => {
  return (
    <>
      <section className="listResult">
        <div className="filtered">
          <Filtered />
        </div>

        <div className="result">
          <h2 className="listResult-title">Offers</h2>

          <div className="productCard-container">
            {ProductAPIResult.productList
              .filter((product) => product.isOnSale)
              .map(({ nombre, precio, img, id }) => (
                <div className="productCard-card">
                  <ProductCard
                    nombre={nombre}
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
