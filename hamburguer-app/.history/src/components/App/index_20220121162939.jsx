import React,  from "react";
import OptionsList from "../OptionsList";
import Header from "../Header";
import HamburguerImg from "../HamburguerImg";
import "./index.css";
import { OrderDetailsProvider } from "../../context/OrderDetails";
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
        {/* Todo: mudar className */}
        <div className="options">
          <OrderDetailsProvider>
            <OptionsList />
          </OrderDetailsProvider>
          {!isConfirmed ? (
          <ConfirmPage order={OrderDetails} confirmRequest={confirmHandler} />
        ) : (
          ""
        )}
        </div>
      </main>
    </div>
  );
};
export default App;
