import React from 'react'

const ProductsSection = (props)=>{
    const productsMeatList = props.productsMeatList
    // console. log(productsMeatList.name)
    return(
        <div>
            <button>+1</button>
            <input type="text" />
            <button>-1</button>
           {/* / <strong>{productsMeatList.name}</strong> */}
        </div>
    )
}

export default ProductsSection