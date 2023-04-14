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
    icon: "fa-solid fa-box-open"
  };

  let totalUsers = {
    title: " Total users",
    color: "success",
    cuantity: users.length,
    icon: "fa-user",
  };

  // const categories = products.map((element) => {
  //   return (element.category === undefined)
    
  // })

  let totalCategories = {
    title: "Total Categories",
    color: "warning",
    cuantity: "2",
    icon: "fa-user-check",
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
