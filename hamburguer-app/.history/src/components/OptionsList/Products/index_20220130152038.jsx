import React, { useContext } from "react";
import { OrderDetails } from "../../../context/OrderDetails";
import "./index.css";

const Products = (props) => {
  const { getProductById, updateProductById } = useContext(OrderDetails); 
  
  let product = getProductById(props.id); // undefined -> count????
  product = product ? product : { id: props.id, count: 0, name: props.name, price: props.price};
  
  function decrementCount() {
    if (product.count > 0) {
      updateProductById(props.id, product.count - 1, props.name, props.price);
    }
  }
  function incrementCount() {
    if (product.count < 2) {
      updateProductById(props.id, product.count + 1, props.name, props.price);
    }
  }
  return (
    <div className="containerProducts">
      <button onClick={decrementCount}>-1</button>
      <input type="text" value={product.count} readOnly/>
      <button onClick={incrementCount}>+1</button>
      <p>{props.name}</p>
    </div>
  );
};
export default Products;
