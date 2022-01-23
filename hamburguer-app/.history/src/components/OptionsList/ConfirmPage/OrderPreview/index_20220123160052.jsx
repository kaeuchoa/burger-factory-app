import React from "react";

const OrderPreview = (props) => {
  const showTotal = () => {
    return props.count * props.price;
  };
  // console.log(props.name)
  return (
    <div>
      <div>{props.name} X</div> 
      <div>{props.count}</div>
      <div>: {showTotal()}R$</div>
    </div>
  );
};

export default OrderPreview;
