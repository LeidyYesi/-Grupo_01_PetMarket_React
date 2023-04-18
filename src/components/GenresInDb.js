import React from "react";
import Category from "./Category";

function GenresInDb() {
  let CategotyData = [
    {
      category: "Accesorios",
      products: "6",
    },
    {
      category: "Juguetes",
      products: "1",
    },
    {
      category: "Alimentos",
      products: "1",
    },
    {
      category: "Aseo",
      products: "2",
    },
  ];

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 text-primary-emphasis">
            Categorias de Productos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-sarasa text-white shadow">
                <div className="card-body">
                <Category category="Juguetes" products="1"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card bg-sarasa text-white shadow">
              <div className="card-body">
              <Category category="Accesorios" products="6"/>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card bg-sarasa text-white shadow">
              <div className="card-body">
              <Category category="Aseo" products="2"/>
                </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card bg-sarasa text-white shadow">
              <div className="card-body">
              <Category category="Alimentos" products="1"/>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
