import React from 'react'
import './index.css'
import Options from './Options'
const ChooseSection = (props)=>{

    const product = props.product
    // const options = props.options
    return(
        <div className='optionsName'>
            {product.name}
        </div>
        
    )
}

export default ChooseSection