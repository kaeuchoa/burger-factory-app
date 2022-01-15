import { createContext, useState } from "react"


const updateProductCount = (id, newCount) => {
    const c = [{id: 0, count: 12}]
    console.log('antes de modificar', c)
    const existingProduct = c.filter((product)=>{return product.id === id})
    if(existingProduct.length > 0){
        // se existe
        existingProduct[0].count = newCount
        c[0] = existingProduct
        console.log('depois de modificar', c)
    }
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