import React from "react";
import ChartRow from "./ChartRow";
import { useEffect, useState } from "react";

function Chart() {
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

  const table = products.map((product) => {
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      discount: product.discount,
    };
  });

  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      {
        <div className="card-body border border-info">
          <div className="table-responsive ">
            <table
              className="table table-bordered border-primary " 
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead class="table-info">
                <tr>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Descuento</th>
                </tr>
              </thead>
              <tbody class="table-info">
                {table.map((row, i) => {
                  return <ChartRow {...row} key={i} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  );
}

export default Chart;
