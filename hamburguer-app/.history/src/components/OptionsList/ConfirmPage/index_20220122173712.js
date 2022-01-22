import React from "react";
import "./index.css";

const ConfirmPage = (props) => {
  return props.trigger ? (
    <div className="confirm-popup">
      {console.log(props.trigger)}
      <div className="container">
        <div className="order-section">
          {logRoles}
        </div>

        <div className="buttons-section">
          <button onClick={() => props.confirmRequest(false)}>cancelar</button>
          <button>Confimar</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ConfirmPage;
