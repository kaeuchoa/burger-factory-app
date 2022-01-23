import React from "react";
import './index.css'
const OrderPreview = (props) => {
  const showTotal = () => {
    return props.count * props.price;
  };
  // console.log(props.name)
  return (
    <div className="container">
      <div className="product name">{props.name}    X</div> 
      <div className="product count">{props.count}</div>
      <div className="product total">: {showTotal()}R$</div>
    </div>
  );
};

export default OrderPreview;
