import { createContext, useState } from "react"


const updateProductCount = (id, newCount, productCount) => {
    const copyProductCount = [...productCount]
    const existingProduct = copyProductCount.filter((product)=>{return product.id === id})
    if(existingProduct.length > 0){
        // se existe
        existingProduct[0].count = newCount
        copyProductCount[0] = existingProduct
    } else {
        copyProductCount.push({
            id: id, // pares chave -> valor
            count: newCount,
        })
    }
    return copyProductCount;
    // se não existe
}
const OrderDetails = createContext()

const OrderDetailsProvider = (props) => {
    // lista com a quantidade de cada produto 100% correto
    // {
    //     id:"",
    //     count: 0,
    // }
    const [productsCount, setProductsCount] = useState([]);
    const setter = (id, newCount) => {
        console.log('setter', id, newCount)
        const newProductsCount = updateProductCount(id, newCount, productsCount);
        setProductsCount(newProductsCount);
    }
    const getById = (id) => {
        return productsCount.filter((product)=>{return product.id === id})
    }
    const value = { getById, setter };
    return <OrderDetails.Provider value={value} {...props} />;
}

export { OrderDetails, OrderDetailsProvider };

// escopo global 
// quem utiliza o OrderDetailsProvider