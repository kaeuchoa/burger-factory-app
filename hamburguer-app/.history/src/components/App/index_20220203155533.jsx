import React, { useState } from "react";
import OptionsList from "../OptionsList";
import Header from "../Header";
import HamburguerImg from "../HamburguerImg";
import ConfirmPage from "../OptionsList/ConfirmPage";
import BillPage from "../BillPage";
import "./index.css";
import { OrderDetailsProvider } from "../../context/OrderDetails";

// npx json-server --watch db.json
const App = (props) => {
  const [showConfirmPage, setShowConfirmPage] = useState(false);

  return (
    <div>
      <Header />
      <main className="container">
        <div className="hamburguerArea">
          <HamburguerImg />
        </div>
        <OrderDetailsProvider>
          <div className="options">
            <OptionsList showConfirmRequest={setShowConfirmPage} />
          </div>
          <ConfirmPage
            trigger={showConfirmPage}
            showConfirmRequest={setShowConfirmPage}
          />
          <BillPage
        </OrderDetailsProvider>
      </main>
    </div>
  );
};
export default App;
