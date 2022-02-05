import React, { useContext } from "react";
import { OrderDetails } from "../../context/OrderDetails";
import OrderPreview from "../OptionsList/ConfirmPage/OrderPreview";
import "./index.css";

const BillPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);
  //todas as informações do pedido estão em productsCount, preciso zerar esse array
  const deleteOrder = () => {
    // console.log(productsCount.lenth)

    var x = 4;
    while (x > 0) {
      x = x - 1;
      productsCount.pop();
    }
    console.log(productsCount);
    return productsCount;
  };
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
        <div className="totalBill">Total: {props.totalOrder.total}R$</div>
        <button className="makeNewOrder" onClick={() => props.BillPage(false)}>
          Fazer novo Pedido
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default BillPage;
