import { createContext } from "react"

const OrderDetails = createContext()

const OrderDetailsProvider = (props) => {
    const value = 'hello';
    return <OrderDetails.Provider value={value} {...props} />;
}

export { OrderDetails, OrderDetailsProvider };

// escopo global 
// quem utiliza o OrderDetailsProvider

var memoria 

fun....
 memoria = ...