import { logRoles } from "@testing-library/react";
import React from "react";
import "./index.css";

const ConfirmPage = (props) => {
  return props.trigger ? (
    <div className="confirm-popup">
      {console.log(props.trigger)}
      <div className="container">
        <div className="order-section">Suporte Técnico na Pratica</div>

        <div className="buttons-section">
          <button
            className="cancel-button"
            onClick={() => props.confirmRequest(false)}
          >
            cancelar
          </button>
          <button className="confirm-button">Confimar</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ConfirmPage;
