import React from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'

const Option = (props)=>{
    // para abrir e fechar(mudar a classe css), usar o state
    console.log(props,"Option")
    return(
        <>
            <div className='optionsName'>
                {/* {props.options.name} */}
            </div>      
            <div className="productsSection"> 
                 <ProductsSection products={{}}/>
            </div> 
        </>
    )
}

export default Option