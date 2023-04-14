import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

/* <!-- Total awards --> */

// let totalAwards = {
//   title: " Total awards",
//   color: "success",
//   cuantity: "79",
//   icon: "fa-award",
// };

/* <!-- Actors quantity --> */

function ContentRowMovies() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let totalProducts = {
    title: "Total Products",
    color: "primary",
    cuantity: products.length,
    icon: "fa-solid fa-box-open",
  };

  let totalUsers = {
    title: " Total users",
    color: "success",
    cuantity: users.length,
    icon: "fa-user",
  };

  console.log(products);

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

  console.log(uniqueCategories);

  let totalCategories = {
    title: "Total Categories",
    color: "warning",
    cuantity: uniqueCategories.length,
    icon: "fa-solid fa-list",
  };
  let cartProps = [totalProducts, totalUsers, totalCategories];

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
