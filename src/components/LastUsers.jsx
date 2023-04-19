import React, { useEffect, useState } from "react";

function LastUsers() {
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
  const localhost = "http://localhost:3030";

  if (ultimoUsuario === undefined) {
    return <h1>Cargando pagina...</h1>;
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-center text-dark">
            Ultimo usuario registrado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center font-weight-bold text-dark">
            <h3>
              {ultimoUsuario.name} {ultimoUsuario.lastname}
            </h3>
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={localhost + ultimoUsuario.img}
              alt=" Foto de perfil "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastUsers;
