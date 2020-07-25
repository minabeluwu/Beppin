import React from "react";
import "../../styles/listProduct.css";
import ProductAPIResult from "../../API/ProductAPIResult";
import Result from "../../components/product/ProductCard";

function Discount() {
  return (
    <section className="promotions">
      <h1 className="promotions-title">Discount</h1>
      <div className="promotions-container">
        {ProductAPIResult.productList
          .filter((product) => product.discount) //encadenacion de metodos
          .map(({ id, img, precio, descripcion }) => (
            <div className="promotions-card">
              <Result
                id={id}
                img={img}
                precio={precio}
                descripcion={descripcion}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Discount;
