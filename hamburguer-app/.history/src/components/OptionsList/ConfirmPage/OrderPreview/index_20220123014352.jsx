import React from "react";

const OrderPreview = (props) => {
  return (
    <>
      <h3>{props.name} X {props.count}</h3>
    </>
  );
};

export default OrderPreview;
