import React from "react";

const OrderPreview = (props) => {
  const showTotal = () =>{
    return props.count * props.price
  }
  // console.log(props.name)
  return (
    <>
      <h3>{props.name} X {props.count} : {}</h3>
    </>
  );
};

export default OrderPreview;
