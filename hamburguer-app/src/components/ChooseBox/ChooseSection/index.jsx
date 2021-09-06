import React from 'react'
import './index.css'

const ChooseSection = (props)=>{
    const product = props.product
    return(
        <div>
            <button>-1</button>
            <input type="text" />
            <button>+1</button>
            {product.name}
        </div>
    )
}

export default ChooseSection