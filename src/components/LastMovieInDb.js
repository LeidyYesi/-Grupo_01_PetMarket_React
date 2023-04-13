import React, { useEffect, useState } from "react";

function LastMovieInDb() {
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

  const ultimoUsuario = users[users.length - 1];

  if (ultimoUsuario === undefined) {
    return <h1>Cargando pagina...</h1>;
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
            Ultimo usuario registrado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h3>{ultimoUsuario.name} {ultimoUsuario.lastname}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
