import React, { useContext } from "react";
import { OrderDetails } from "../../context/OrderDetails";
import OrderPreview from "../OptionsList/ConfirmPage/OrderPreview";
import OrderService from "../../services/OrderService";
import "./index.css";
const BillPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);
  const orderService = new OrderService();
    console.log()
  return props.trigger ? (
    <div className="BillPage">
      <div className="Billbox">
        <h1>Seu Pedido foi Realizado</h1>
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
        <div className="totalBill">Total:{props.total}</div>
        <button className="makeNewOrder" onClick={() => props.showBill(false)}>
          Fazer novo Pedido
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default BillPage;
