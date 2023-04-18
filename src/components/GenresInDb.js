import React from "react";
import { useEffect, useState } from "react";

function GenresInDb(props) {
  /*const [categories, setCategories] = useState({});*/
  const [products, setProducts] = useState([]);
  /*console.log(categories);*/

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

  /**
   * getUniqueCategories - Función que obtiene las categorías únicas de un array de productos.
   *
   * @param {Array} products - Un array de objetos de productos, donde cada objeto tiene una propiedad 'category'.
   * @returns {Array} Un array que contiene todas las categorías únicas del array de productos proporcionado.
   */
  const getUniqueCategories = (products) => {
    // Crea un nuevo Set, que almacenará las categorías únicas.
    const uniqueCategoriesSet = new Set();

    // Recorre cada producto en el array de productos.
    products.forEach((product) => {
      // Agrega la propiedad 'category' del producto actual al Set.
      // Los Sets solo almacenan valores únicos, por lo que no se agregarán categorías duplicadas.
      uniqueCategoriesSet.add(product.category);
    });

    // Convierte el Set de categorías únicas a un array y devuelve el resultado.
    return Array.from(uniqueCategoriesSet);
  };

  // Llama a la función getUniqueCategories con el array de productos y almacena el resultado en la variable uniqueCategories.
  const uniqueCategories = getUniqueCategories(products);

  let category = [uniqueCategories];

  <ul>
    {category.map((category, i) => {
      return;
      <li key={i}>{category}</li>;
    })}
  </ul>;

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-sarasa text-white shadow ">
                <div className="card-body"> {category} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
