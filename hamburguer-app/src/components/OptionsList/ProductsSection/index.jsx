import React from 'react'
import './products.css'
const ProductsSection = (props)=>{
    return(
        props.products.map((products)=>{
            return(
                <div className='containerProducts'>
                    <button>-1</button>
                    <input type="text" />
                    <button>+1</button>
                    <p>{products.name}</p>
                </div>
            )
        })
    )
}

export default ProductsSection