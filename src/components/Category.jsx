import React from "react";

function Category(props) {
  return (
    <div className="name-and-number">
      <p> {props.category}</p>
      <p>{props.products}</p>
    </div>
  );
}

export default Category;
