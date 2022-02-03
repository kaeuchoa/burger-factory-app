import React from "react";
import { OrderDetails } from "../../context/OrderDetails";
import OrderPreview from "../OptionsList/ConfirmPage/OrderPreview";
import OrderService from "../../services/OrderService";

const BillPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);
  const orderService = new OrderService();

  const onClickHandler = (e) => {
    orderService.save(productsCount).then((data) => {
      console.log(data); // fazer uma confimação
    });
  };
  return props.trigger ? (
    <div>
      <div className="ClosePage">x</div>
      <div className="order-section">
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
    </div>
  ) : (
    ""
  );
};

export default BillPage;
