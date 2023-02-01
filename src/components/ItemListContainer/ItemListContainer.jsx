import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ itemName }) => {
  return (
    <div className="item-list-container">
      <h2 className="item-list-title">{itemName}</h2>
    </div>
  );
};

export default ItemListContainer;
