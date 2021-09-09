import React from 'react'
import './index.css'

const ChooseSection = (props)=>{
    const product = props.product
    return(
        <div className='optionsName'>
            {product.name}
        </div>
    )
}

export default ChooseSection