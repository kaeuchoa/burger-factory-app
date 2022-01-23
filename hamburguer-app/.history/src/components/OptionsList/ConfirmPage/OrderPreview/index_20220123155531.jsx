import React from "react";

const OrderPreview = (props) => {
  const showTotal = () =>{
    return {props.count}
  }
  // console.log(props.name)
  return (
    <>
      <h3>{props.name} X {props.count} : {props.price}</h3>
    </>
  );
};

export default OrderPreview;
