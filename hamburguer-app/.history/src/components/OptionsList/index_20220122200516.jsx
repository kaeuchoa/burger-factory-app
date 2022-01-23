import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import Option from "./Option";
import OptionsService from "../../services/OptionsService";
import { OrderDetails } from "../../context/OrderDetails";

const OptionsList = (props) => {
  const [options, setOptions] = useState([]);

 

 

    // criar um serviço novo
    // enviar pro servidor
    // servidor vai retornar o valor total do pedido
    // opcional: criar um modal com o resumo do pedido
    // mostrar  o preço individual de cada produto
  

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
        <button className="sendButton" onClick={()=>props.showConfirmRequest(true)}>
          Finalizado
        </button>
      </div>
    </div>
  );
};

export default OptionsList;
