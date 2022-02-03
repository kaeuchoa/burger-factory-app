import React, { useEffect, useContext } from "react";
import { OrderDetails } from "../../../context/OrderDetails";
import OrderPreview from "./OrderPreview";
import "./index.css";

const ConfirmPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);
  const orderService = new OrderService()
  
  const onClickHandler = (e) => {
    orderService
    .then((data) => {
      console.log(data)
    });

    // criar um serviço novo
    // enviar pro servidor
    // servidor vai retornar o valor total do pedido
    // opcional: criar um modal com o resumo do pedido
    // mostrar  o preço individual de cada produto
  };

  return props.trigger ? (
    <div className="confirm-popup">
      <div className="confirm-section">
        <div className="order-section">
            {productsCount.map((products) => {
              return <OrderPreview name={products.name} count={products.count} price = {products.price} key={products.id}/>
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
