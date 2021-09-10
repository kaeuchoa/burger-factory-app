import React from 'react'
import './index.css'
import Options from '../ProductsSection'
const ChooseSection = (props)=>{
    const options = props.options

    return(
        <div className='optionsName'>
            {options.name}
        </div>
        
    )
}

export default ChooseSection