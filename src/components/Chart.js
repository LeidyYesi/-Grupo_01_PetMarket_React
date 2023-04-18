import React from 'react';
import ChartRow from './ChartRow';
import { useEffect, useState } from "react";



function Chart (){
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

let tableData = [
    {
        name: products.name,
        description: products.description,
        price: products.price,
        discount: products.discount,
    }
];
const tableRowsData=[tableData]

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;


/*let tableRowsData = [
    {
        name: "Carpa portatil gato",
        description: 'Carpa portatil para gato',
        price: '$23000',
        discount: "40%",
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]*/ 