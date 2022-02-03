import React from "react";
import { OrderDetails } from "../../context/OrderDetails";
import OrderPreview from "../OptionsList/ConfirmPage/OrderPreview";

const BillPage = (props) => {
  const { _, __, productsCount } = useContext(OrderDetails);

  return props.trigger ? (
    <div className='BillPage'>
      <button className="ClosePage">x</button>
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
