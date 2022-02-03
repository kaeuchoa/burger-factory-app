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
  return <div>OLa mundo</div>;
};

export default BillPage;
