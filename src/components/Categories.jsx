import React, { useEffect, useState } from "react";
import Category from "./Category";

function Categories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const countCategories = (products) => {
    const categoriesCount = {};

    products.forEach((product) => {
      if (!categoriesCount.hasOwnProperty(product.category)) {
        categoriesCount[product.category] = 1;
      } else {
        categoriesCount[product.category]++;
      }
    });

    return categoriesCount;
  };

  const categoriesCount = countCategories(products);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-dark">
            Categorias de Productos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {Object.entries(categoriesCount).map(
              ([category, productsCount], index) => (
                <div className="col-lg-6 mb-4" key={index}>
                  <div className="card bg-sarasa text-white shadow">
                    <div className="card-body">
                      {console.log(category + " / " + productsCount)}
                      <Category category={category} products={productsCount} />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
