import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import Option from "./Option";
import OptionsService from "../../services/OptionsService";

const OptionsList = (props) => {
  const optionsService = new OptionsService();
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    optionsService.listAll().then((optionsObject) => {
      setOptions(optionsObject);
    });
  }, []);
  

  // const { _, __, productsCount } = useContext(OrderDetails);
  // const onClickHandler = (e) => {
  //   fetch("http://localhost:3000/finishOrder", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(productsCount),
  //   }).then(() => {
  //     console.log(productsCount); //Pedido finalizado
  //   });
  // };

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
          onClick={() => props.showConfirmRequest(true)}
        >
          Finalizado
        </button>
      </div>
    </div>
  );
};

export default OptionsList;
