import { createContext, useState } from "react"


const updateProductCount = (id, ) => {

}
const OrderDetails = createContext()

const OrderDetailsProvider = (props) => {
    // lista com a quantidade de cada produto 100% correto
    // {
    //     id:"",
    //     count: 0,
    // }
    const [productsCount, setProductsCount] = useState([]);
    
    const value = { productsCount, updateProductCount };
    return <OrderDetails.Provider value={value} {...props} />;
}

export { OrderDetails, OrderDetailsProvider };

// escopo global 
// quem utiliza o OrderDetailsProvider