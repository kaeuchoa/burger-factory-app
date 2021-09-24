import React from 'react'
import './products.css'
const ProductsSection = (props)=>{
    console. log(props)
    return(
        <div className='container'>
            <button>+1</button>
            <input type="text" />
            <button>-1</button>
            {props.products.map((products)=>{
                return products.name
            })}
            {/* {props.products[1].name} */}
        </div>
    )
}

export default ProductsSection