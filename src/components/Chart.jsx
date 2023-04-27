import React from "react";
import ChartRow from "./ChartRow";
import { useEffect, useState } from "react";

// El componente Chart se encarga de mostrar una tabla con los productos y la paginación
function Chart() {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);
  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect para obtener los productos al cargar el componente
  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        // Ordena los productos por nombre de manera ascendente
        const sortedData = data.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setProducts(sortedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Mapea los productos para generar un objeto con los datos necesarios para la tabla
  const table = products.map((product) => {
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      discount: product.discount,
    };
  });

  // Establece la cantidad de productos por página
  const productsPerPage = 5;
  // Calcula los índices del primer y último producto de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Obtiene los productos de la página actual
  const currentProducts = table.slice(indexOfFirstProduct, indexOfLastProduct);

  // Renderiza la tabla con los productos y el componente de paginación
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
            <tbody className="table-info text-dark">
              {currentProducts.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
          <Pagination
            totalProducts={table.length}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

// El componente Pagination se encarga de la navegación entre las páginas
function Pagination({ totalProducts, productsPerPage, currentPage, setCurrentPage }) {
  // Calcula el total de páginas
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Función para cambiar de página
  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

 // Renderiza los botones de navegación
return (
  <div className="pagination">
    <button onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1}>
      &laquo;
    </button>
    <span>{currentPage}</span>
    <button onClick={() => handleChangePage(currentPage + 1)} disabled={currentPage === totalPages}>
      &raquo;
    </button>
  </div>
);
}

export default Chart;
