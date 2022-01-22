import React, { useState } from "react";
import './index.css'

const ConfirmPage = (props) => {
    console.log(props.confirmRequest)
  
  const orderConfirmed = () => {
    props.confirmRequest(true);
  };
  const cancelOrder = () => {
      props.confirmRequest(false)
  };
  return (
    <div className="confirm-page">
      <div className="order-section">{}</div>
      <button className='cancel-button'onClick={cancelOrder}>cancelar</button>
      <button className='' onClick={orderConfirmed}>Confimar</button>
    </div>
  );
};
export default ConfirmPage
