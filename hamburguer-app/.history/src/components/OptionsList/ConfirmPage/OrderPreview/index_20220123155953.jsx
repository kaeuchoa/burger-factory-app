import React from "react";

const OrderPreview = (props) => {
  const showTotal = () => {
    return props.count * props.price;
  };
  // console.log(props.name)
  return (
    <>
      <div>{props.name} X</div> <h3>{props.count}</h3> <h3>: {showTotal()}R$</h3>
    </>
  );
};

export default OrderPreview;
