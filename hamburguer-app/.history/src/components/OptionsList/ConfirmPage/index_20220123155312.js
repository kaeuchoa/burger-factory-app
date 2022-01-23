import React, { useEffect, useContext } from "react";
import { OrderDetails } from "../../../context/OrderDetails";
import OrderPreview from "./OrderPreview";
import "./index.css";

const ConfirmPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);
  
  const onClickHandler = (e) => {
    fetch("http://localhost:3000/finishOrder", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(productsCount),
    }).then(() => {
      console.log(productsCount); //Pedido finalizado
    });

    // criar um serviço novo
    // enviar pro servidor
    // servidor vai retornar o valor total do pedido
    // opcional: criar um modal com o resumo do pedido
    // mostrar  o preço individual de cada produto
  };

  return props.trigger ? (
    <div className="confirm-popup">
      <div className="container">
        <div className="order-section">
            {productsCount.map((products) => {
              // console.log(products)
              return <OrderPreview name={products.name} count={products.count} price = {}/>;
            })}
        </div>
        <div className="buttons-section">
          <button
            className="cancel-button"
            onClick={() => props.showConfirmRequest(false)}
          >
            cancelar
          </button>
          <button className="confirm-button" onClick={() => onClickHandler()}>
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
