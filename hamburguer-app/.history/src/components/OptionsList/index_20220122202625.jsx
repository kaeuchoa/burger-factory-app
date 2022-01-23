import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import Option from "./Option";
import OptionsService from "../../services/OptionsService";
import { OrderDetails } from "../../context/OrderDetails";

const OptionsList = (props) => {
  const optionsService = new OptionsService();
  const [options, setOptions] = useState([]);

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

    // criar um serviço novo
    // enviar pro servidor
    // servidor vai retornar o valor total do pedido
    // opcional: criar um modal com o resumo do pedido
    // mostrar  o preço individual de cada produto
  };
  const onClickManage = () => {

  };

  return (
    <div className="container">
      <div className="containerBox">
        <div className="chooseContainer">
          {options.map((option) => {
            return (
              <Option
                key={option.id}
                optionsName={option.name}
                products={option.products}
              />
            );
          })}
        </div>
        <button
          className="sendButton"
          onClick={() => }
        >
          Finalizado
        </button>
      </div>
    </div>
  );
};

export default OptionsList;
