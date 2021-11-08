import React from 'react'
import './products.css'
import Products from './Products'
import { useState } from 'react'

const ProductsSection = (props)=>{
  
    return(
        props.products.map((products)=> <Products name={products.name}/>)
    )   
}

export default ProductsSection