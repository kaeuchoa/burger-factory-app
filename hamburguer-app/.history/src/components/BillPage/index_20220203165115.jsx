import React, { useContext } from "react";
import { OrderDetails } from "../../context/OrderDetails";
import OrderPreview from "../OptionsList/ConfirmPage/OrderPreview";
import "./index.css";
const BillPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);

  return props.trigger ? (
    <div className="BillPage">
      <div className="Billbox">
        <button className="ClosePage" onClick={() => props.showBill(false)}>
          x
        </button>   
        <h1>Seu Pedido foi Conclu</h1>
        <div className="bills-section">
          {productsCount.map((products) => {
            return (
              <OrderPreview
                name={products.name}
                count={products.count}
                price={products.price}
                key={products.id}
              />
            );
          })}
        </div>
        <button className="makeNewOrder">Fazer novo Pedido</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default BillPage;
