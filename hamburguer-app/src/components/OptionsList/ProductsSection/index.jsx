import React from 'react'
import './products.css'
import { useState } from 'react'

const ProductsSection = (props)=>{
    const [count, setCount] = useState(0);
    
    return(
        props.products.map((products)=>{
            return(
                <div className='containerProducts'>
                    <button onClick={()=>setCount(count - 1)}>-1</button>
                    <input type="text" value={count}/>
                    <button onClick={()=>setCount(count + 1)}>+1</button>
                    <p>{products.name}</p>
                </div>
            )
        })
    )   
}

export default ProductsSection