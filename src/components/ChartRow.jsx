import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>${props.price}</td>
                    <td>{props.discount}%</td>
                </tr>
            )
    }
    
        

export default ChartRow;


/*<ul>
 {props.discount.map( (discount,i) => 
 <li key={`discount ${i}`}>{discount}</li>
)}
</ul>*/