import React from "react";
import ProductAPIResult from "../../API/ProductAPIResult";
import Result from "../../components/product/ProductCard";

function Discount() {
  return (
    <section className="productCard">
      <h1 className="productCard-title">Discount</h1>
      <div className="productCard-container">
        {ProductAPIResult.productList
          .filter((product) => product.discount)
          .map(({ id, img, precio, nombre }, index) => (
            <div className="productCard-card">
              <Result
                id={id}
                img={img}
                precio={precio}
                nombre={nombre}
                key={index}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Discount;
