import React, { useState } from "react";

const ConfirmPage = (props) => {
    //  console.log(props.order)
  const [isConfirmed, setIsConfirmed] = useState(false);
  const orderConfirmed = () => {
    setIsConfirmed(true);
  };
  const cancelOrder = () => {
      setIsConfirmed(false)
  };
  return (
    <div className="confirm-page">
      <div className="order-section">{props.order}</div>
      <button onClick={cancelOrder}>cancelar</button>
      <button onClick={orderConfirmed}>Confimar</button>
    </div>
  );
};
export default ConfirmPage
