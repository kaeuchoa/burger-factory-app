import React from "react";
import "./index.css";

const ConfirmPage = (props) => {
  return props.trigger ? (
    <div className="confirm-popup">
      {console.log(props.trigger)}
      <div className="order-section">{"jdnaosndasidb daishdas isdnasoud"}</div>
      <div>
        
      </div>
      <button onClick={() => props.confirmRequest(false)}>cancelar</button>
      <button>Confimar</button>
    </div>
  ) : (
    ""
  );
};

export default ConfirmPage;
