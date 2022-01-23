import React from "react";

const OrderPreview = (props) => {
  const showTotal = () => {
    return props.count * props.price;
  };
  // console.log(props.name)
  return (
    <div className="container">
      <div className="product-name">{props.name} X</div> 
      <div className="product-count">{props.count}</div>
      <div clas>: {showTotal()}R$</div>
    </div>
  );
};

export default OrderPreview;
