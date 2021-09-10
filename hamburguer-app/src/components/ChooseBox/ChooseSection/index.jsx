import React from 'react'
import './index.css'
import Options from './Options'
const ChooseSection = (props)=>{
    const options = props.options

    return(
        <div className='optionsName'>
            {options.name}
        </div>
        
    )
}

export default ChooseSection