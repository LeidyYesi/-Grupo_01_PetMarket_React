import React from "react";
import ChartRow from "./ChartRow";
import { useEffect, useState } from "react";

function Chart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        // Ordenar los productos por nombre de manera ascendente
        const sortedData = data.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setProducts(sortedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const table = products.map((product) => {
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      discount: product.discount,
    };
  });

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead className="table-info">
              <tr className="text-dark">
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Descuento</th>
              </tr>
            </thead>
            <tbody class="table-info text-dark">
              {table.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
