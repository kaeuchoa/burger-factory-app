import { createContext, useState } from 'react';

export const ProductsData = createContext(null)

function ProductsDataProvider({ children }) {
    const [products, setProducts] = useState([]);

    return (
        <ProductsData.Provider value={{products,setProducts}}>
            {children}
        </ProductsData.Provider>
    );
}
// function ProductsDataConsumer(props) {
//     return
// }

export default ProductsDataProvider