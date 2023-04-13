import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
  title: "Movies in Data Base",
  color: "primary",
  cuantity: 21,
  icon: "fa-clipboard-list",
};

/* <!-- Total awards --> */

// let totalAwards = {
//   title: " Total awards",
//   color: "success",
//   cuantity: "79",
//   icon: "fa-award",
// };

/* <!-- Actors quantity --> */

let actorsQuantity = {
  title: "Actors quantity",
  color: "warning",
  cuantity: "49",
  icon: "fa-user-check",
};

function ContentRowMovies() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let totalUsers = {
    title: " Total users",
    color: "success",
    cuantity: users.length,
    icon: "fa-user",
  };

  let cartProps = [moviesInDB, totalUsers, actorsQuantity];

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
