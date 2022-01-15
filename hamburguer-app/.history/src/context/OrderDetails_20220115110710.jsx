import { createContext, useState } from "react"

const OrderDetails = createContext()

const OrderDetailsProvider = (props) => {
    // lista com a quantidade de cada produto 100% correto
    const [] = useState([
        {
            id:"",
            count: 0
        }
    ])
    const value = 'hello';
    return <OrderDetails.Provider value={value} {...props} />;
}

export { OrderDetails, OrderDetailsProvider };

// escopo global 
// quem utiliza o OrderDetailsProvider