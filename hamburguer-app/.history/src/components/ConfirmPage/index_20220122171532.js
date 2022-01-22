import React from "react";
import "./index.css";

const ConfirmPage = (props) => {
  console.log(props.confirmRequest);

  const orderConfirmed = () => {
    props.confirmRequest(true);
  };
  const cancelOrder = () => {
    props.confirmRequest(false);
  };

  return props.trigger ? (
    <div className="confirm-page">
      <div className="order-section"><h1>Area do pedido</h1></div>
      <button className="cancel-button" onClick={cancelOrder}>
        cancelar
      </button>
      <button className="confirm-button" onClick={orderConfirmed}>
        Confimar
      </button>
    </div>
  ) : (
    ""
  );
};
export default ConfirmPage;
