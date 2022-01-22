import React, { useState, useContext } from "react";
import OptionsList from "../OptionsList";
import Header from "../Header";
import HamburguerImg from "../HamburguerImg";
import "./index.css";
import { OrderDetailsProvider } from "../../context/OrderDetails";
import { OrderDetails } from "../../context/OrderDetails";
import ConfirmPage from "../ConfirmPage";

// npx json-server --watch db.json
const App = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const confirmHandler = (confirm) => {
    console.log(confirm);
    return setIsConfirmed(confirm);
  };
  return (
    <div>
      <Header />
      <main className="container">
        <div className="hamburguerArea">
          <HamburguerImg />
        </div>
        <div className="options">
          <OrderDetailsProvider>
            <OptionsList />
            {!isConfirmed ? (
              <ConfirmPage
                order={OrderDetails}
                confirmRequest={confirmHandler}
              />
            ) : (
              ""
            )}
          </OrderDetailsProvider>
        </div>
      </main>
    </div>
  );
};
export default App;
