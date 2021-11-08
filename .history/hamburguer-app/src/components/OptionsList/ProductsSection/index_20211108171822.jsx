import React from 'react'
import './products.css'
import Products from './Products'
import { useState } from 'react'

const ProductsSection = (props)=>{
  
    return(
        props.products.map((product)=> <Products name={products.name}/>)
    )   
}

export default ProductsSection