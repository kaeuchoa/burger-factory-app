import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import Option from "./Option";
import OptionsService from "../../services/OptionsService";
import PostOrder from "../../services/PostOrder";
import { OrderDetails } from "../../context/OrderDetails";

const OptionsList = () => {
  const optionsService = new OptionsService();

  const [options, setOptions] = useState([]);
  const { _, __, productsCount } = useContext(OrderDetails);
  useEffect(() => {
    optionsService.listAll().then((optionsObject) => {
      setOptions(optionsObject);
    });
  }, []);

  const onClickHandler = (e) => {
    const postOrder = new PostOrder();
    console.log(productsCount); //Pedido finalizado

    fetch("http://localhost:3000/finishOrder", {
      method: "POST",
      headers: { "Content-type": "apliacation/json" },
      body: JSON.stringify(productsCount)
    });then

    // criar um serviço novo
    // enviar pro servidor
    // servidor vai retornar o valor total do pedido
    // opcional: criar um modal com o resumo do pedido
    // mostrar  o preço individual de cada produto
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
        <button className="sendButton" onClick={onClickHandler}>
          Finalizado
        </button>
      </div>
    </div>
  );
};

export default OptionsList;
