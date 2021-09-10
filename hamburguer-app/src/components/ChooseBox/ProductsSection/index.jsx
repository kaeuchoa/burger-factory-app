import React from 'react'

const ProductsSection = (props)=>{
    const meatList = props.meatList
    return(
        <div>
            <button>+1</button>
            <input type="text" />
            <button>-1</button>
            {meatList.name}
        </div>
    )
}

export default ProductsSection