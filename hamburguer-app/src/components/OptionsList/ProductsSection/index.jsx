import React from 'react'
import './products.css'
import Products from './Products'


const ProductsSection = (props)=>{
  
    return(
        props.products.map((product)=> <Products name={product.name}/>)
    )   
}

export default ProductsSection