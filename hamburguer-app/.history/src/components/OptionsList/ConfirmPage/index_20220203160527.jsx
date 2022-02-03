import React, { useContext } from "react";
import { OrderDetails } from "../../../context/OrderDetails";
import OrderPreview from "./OrderPreview";
import OrderService from "../../../services/OrderService";
import "./index.css";

const ConfirmPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);
  const orderService = new OrderService();

  const onClickHandler = (e) => {
    orderService.save(productsCount).then((data) => {
      console.log(data); // fazer uma confimação
    });
  };
  const ifConfirm = () =>{
    onClickHandler()
    
  }
  return props.trigger ? (
    <div className="confirm-popup">
      <div className="confirm-section">
        <div className="order-section">
          {productsCount.map((products) => {
            return (
              <OrderPreview
                name={products.name}
                count={products.count}
                price={products.price}
                key={products.id}
              />
            );
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
