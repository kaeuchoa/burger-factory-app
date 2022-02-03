import React, { useState } from "react";
import "./index.css";
import Products from "../Products";


function name(e) {
  this.
}

const Option = (props) => {
  // para abrir e fechar(mudar a classe css), usar o state
  const [show, setShow] = useState(false);
  function toggle() {
    setShow((show) => !show);
  }
  function renderProducts() {
    return show
      ? props.products.map((product) => (
          <Products price={product.price} name={product.name} id={product.id} key={product.id}/>
        ))
      : null;
  }

  return (
    <div>
      <div>
        <button className="optionsName" onClick={toggle}>
          {props.optionsName}
        </button>
      </div>

      <div className="productsSection">{renderProducts()}</div>
    </div>
  );
};

export default Option;
