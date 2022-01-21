import React, { useState } from "react";

export default ConfirmPage = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const orderConfirmed = () => {
    setIsConfirmed(true);
  };
  const cancelOrder = () => {
      setIsConfirmed(false)
  };
  return (
    <div className="confirm-page">
      <div className="order-section"></div>
      <button onClick={cancelOrder}>cancelar</button>
      <button onClick={orderConfirmed}>Confimar</button>
    </div>
  );
};
