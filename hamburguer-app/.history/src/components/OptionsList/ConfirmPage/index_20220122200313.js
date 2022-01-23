import React {, useEffect, useContext}from "react";
import { OrderDetails } from "../../context/OrderDetails";

import "./index.css";

const ConfirmPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);
  useEffect(() => {
    optionsService.listAll().then((optionsObject) => {
      setOptions(optionsObject);
    });
  }, []);
  const onClickHandler = (e) => {
    fetch("http://localhost:3000/finishOrder", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(productsCount),
    }).then(() => {
      console.log(productsCount); //Pedido finalizado
    });
  };

  return props.trigger ? (
    <div className="confirm-popup">
      {console.log(props.trigger)}
      <div className="container">
        <div className="order-section"></div>

        <div className="buttons-section">
          <button
            className="cancel-button"
            onClick={() => props.showConfirmRequest(false)}
          >
            cancelar
          </button>
          <button className="confirm-button" onClick={onClickHandler}>
            Confimar
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ConfirmPage;
