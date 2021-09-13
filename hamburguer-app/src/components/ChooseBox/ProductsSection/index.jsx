import React from 'react'

const ProductsSection = (props)=>{
    const productsList = props.products
    // console.log(productsList.name)//apesar de aparecer os valores no console, da erro
    return(
        <div>
            <button>+1</button>
            <input type="text" />
            <button>-1</button>
            {/* <strong>{productsList.name}</strong> */}
        </div>
    )
}

export default ProductsSection