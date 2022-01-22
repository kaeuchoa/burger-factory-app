import React, { useState } from "react";
import OptionsList from "../OptionsList";
import Header from "../Header";
import HamburguerImg from "../HamburguerImg";
import ConfirmPage from "../OptionsList/ConfirmPage";
import "./index.css";
import { OrderDetailsProvider } from "../../context/OrderDetails";

// npx json-server --watch db.json
const App = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div>
      <Header />
      <main className="container">
        <div className="hamburguerArea">
          <HamburguerImg />
        </div>
        {/* Todo: mudar className */}
        <div className="options">
          <OrderDetailsProvider>
            <OptionsList confirmRequest={setIsConfirmed} />
          </OrderDetailsProvider>
        </div>

       
          <ConfirmPage trigger={isConfirmed} confirmRequest={setIsConfirmed} />
        </div>

      </main>
    </div>
  );
};
export default App;
