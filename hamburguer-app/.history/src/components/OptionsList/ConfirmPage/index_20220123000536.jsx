import React , {useEffect, useContext}from "react";
import { OrderDetails } from '../../../context/OrderDetails'
import OptionsService from "../../../services/OptionsService";
import "./index.css";

const ConfirmPage = (props) => {
  // const optionsService = new OptionsService();

  // const { _, __, productsCount } = useContext(OrderDetails);
  // useEffect(() => {
  //   optionsService.listAll().then((optionsObject) => {
  //     setOptions(optionsObject);
  //   });
  // }, []);

  // const onClickHandler = (e) => {
  //   fetch("http://localhost:3000/finishOrder", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(productsCount),
  //   }).then(() => {
  //     console.log(productsCount); //Pedido finalizado
  //   });
  // };

  return props.trigger ? (
    <div className="confirm-popup">
      <div className="container">
        <div className="order-section"></div>

        <div className="buttons-section">
          <button
            className="cancel-button"
            onClick={() => props.showConfirmRequest(false)}
          >
            cancelar
          </button>
          <button className="confirm-button" onClick={() => props.showConfirmRequest(false)}>
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
