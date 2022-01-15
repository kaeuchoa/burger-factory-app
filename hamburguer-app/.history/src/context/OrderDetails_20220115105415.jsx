import { createContext } from "react"

const OrderDetails = createContext()


const OrderDetailsProvider = (props) => {

    const value = 
    return <OrderDetails.Provider value={value} {...props} />
}

