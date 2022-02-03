import React, { useState, useEffect} from "react";
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

  return (
    <div className="container">
      
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
      </div>
      <button
          className="sendButton"
          onClick={() => props.showConfirmRequest(true)}
        >
          Finalizado
        </button>
    </div>
  );
};

export default OptionsList;
