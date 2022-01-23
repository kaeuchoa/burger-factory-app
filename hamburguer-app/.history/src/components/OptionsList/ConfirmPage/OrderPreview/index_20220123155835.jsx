import React from "react";

const OrderPreview = (props) => {
  const showTotal = () =>{
    return props.count * props.price
  }
  // console.log(props.name)
  return (
    <>
      <h3>{props.name} X</h3> <h3>{props.count}</h3> : {showTotal()}R$
    </>
  );
};

export default OrderPreview;
