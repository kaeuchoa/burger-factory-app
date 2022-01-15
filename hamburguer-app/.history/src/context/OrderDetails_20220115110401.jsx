import { createContext } from "react"

const OrderDetails = createContext()

const OrderDetailsProvider = (props) => {
    // lista de 
    const value = 'hello';
    return <OrderDetails.Provider value={value} {...props} />;
}

export { OrderDetails, OrderDetailsProvider };

// escopo global 
// quem utiliza o OrderDetailsProvider