import React from "react";

function Category(props) {
  return (
    <div>
      <p> {props.category}</p>
      <p>{props.products}</p>
    </div>
  );
}

export default Category;
