import React, { useEffect, useState } from "react";
import Category from "./Category";

function Categories() {
  const [products, setProducts] = useState([]);

  // useEffect() es un Hook de efecto en React que se ejecuta después del renderizado del componente.
useEffect(() => {
  // Realiza una llamada fetch() a la API en la dirección "http://localhost:3030/api/products".
  fetch("http://localhost:3030/api/products")
    .then((response) => response.json()) // Convierte la respuesta en un objeto JSON.
    .then((data) => {
      setProducts(data.data); // Actualiza el estado del componente con el array de productos.
    })
    .catch((error) => {
      console.log(error); // Registra cualquier error en la consola.
    });
}, []); // El array de dependencias está vacío, por lo que useEffect se ejecutará solo una vez, cuando el componente se monte.

// countCategories() es una función que acepta un array de productos y devuelve un objeto con la cantidad de productos por categoría.
const countCategories = (products) => {
  const categoriesCount = {}; // Inicializa un objeto vacío para almacenar las categorías y sus respectivos conteos.

  // Itera sobre el array de productos.
  products.forEach((product) => {
    // Si la categoría del producto no existe en categoriesCount, crea una nueva entrada y asigna su valor inicial en 1.
    if (!categoriesCount.hasOwnProperty(product.category)) {
      categoriesCount[product.category] = 1;
    } else {
      // Si la categoría ya existe en categoriesCount, incrementa su valor en 1.
      categoriesCount[product.category]++;
    }
  });

  return categoriesCount; // Devuelve el objeto categoriesCount con la cantidad de productos por categoría.
};

// Llama a la función countCategories() con el array de productos y almacena el resultado en la constante categoriesCount.
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
