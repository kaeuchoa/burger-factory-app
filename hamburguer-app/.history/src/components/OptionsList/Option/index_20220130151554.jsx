import React, { useState } from "react";
import "./index.css";
import Products from "../Products";


const Option = (props) => {
  // para abrir e fechar(mudar a classe css), usar o state
  const [show, setShow] = useState(false);
  function toggle() {
    setShow((show) => !show);
  }

  // map -> array novo com o retorno da função aplicada em cada item do array
  // filter -> array novo baseado no booleano da função anonima. Se for true ele retorna o item, se não ele exclui
  [1,2,3].filter(() => {
    return
  })
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
