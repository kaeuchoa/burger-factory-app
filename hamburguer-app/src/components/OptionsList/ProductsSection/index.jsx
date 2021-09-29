import React from 'react'
import './products.css'
const ProductsSection = (props)=>{
    return(
        props.products.map((products)=>{
            return(
                <div className='container'>
                    <button>-1</button>
                    <input type="text" />
                    <button>+1</button>
                    {products.name}
                </div>
            )
        })
    )
}

export default ProductsSection