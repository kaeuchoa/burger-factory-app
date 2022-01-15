import { createContext, useState } from "react"

const updateProductCount = (id, newCount, productsCount) => {
    const copyProductCount = [...productsCount]
    const productIndex = copyProductCount.findIndex((product)=>{ return product.id === id }) // se ela acha retorna o index se não, ela retorna -1
    if(productIndex > -1){
        const existingProduct = copyProductCount[productIndex]
        existingProduct.count = newCount
        copyProductCount[productIndex] = existingProduct
    } else {
        copyProductCount.push({
            id: id, // pares chave -> valor
            count: newCount,
        })
    }
    return copyProductCount;
}
const OrderDetails = createContext()

const OrderDetailsProvider = (props) => {
    // lista com a quantidade de cada produto 100% correto
    // {
    //     id:"",
    //     count: 0,
    // }
    const [productsCount, setProductsCount] = useState([]);
    const updateProductById = (id, newCount) => {
        const newProductsCount = updateProductCount(id, newCount, productsCount);
        setProductsCount(newProductsCount);
    }
    const getById = (id) => {
        const filteredById = productsCount.filter((product)=>{ return product.id === id })
        return filteredById[0]
    }
    const value = { getById, updateProductById, productsCount };
    return <OrderDetails.Provider value={value} {...props} />;
}

export { OrderDetails, OrderDetailsProvider };

// escopo global 
// quem utiliza o OrderDetailsProvider