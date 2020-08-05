import React from "react";
import Filtered from "../../components/filtered/Filtered";
import ProductAPIResult from "../../API/ProductAPIResult";
import ProductCart from "../../components/product/ProductCard";
import { useParams } from "react-router-dom";

const CategoriesList = () => {
  const { categoria } = useParams();

  const filteredProductList = ProductAPIResult.productList.filter(
    (producto) => {
      const esLaCategoria = producto.categoria === categoria;
      return esLaCategoria;
    }
  );
  return (
    <>
      <section className="listResult">
        <div className="filtered">
          <Filtered />
        </div>

        <div className="result">
          <h2 className="categorie-title">{categoria}</h2>
          <div className="productCard-container">
            {filteredProductList.map(({ id, precio, img, nombre }) => (
              <div className="productCard-card">
                <ProductCart
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

export default CategoriesList;
