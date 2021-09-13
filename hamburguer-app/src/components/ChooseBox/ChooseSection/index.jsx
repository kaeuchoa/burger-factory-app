import React from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'
const ChooseSection = (props)=>{
    const options = props.options
    return(
        <>
            <div className='optionsName'>
                {options.name}
            </div>      
            {/* <div className="productsSection">  */}
                 {/* <ProductsSection key={options.id}/> */}
            {/* </div>  */}
        </>
    )
}

export default ChooseSection