import React from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'

const Option = (props)=>{
    // para abrir e fechar(mudar a classe css), usar o state
    console.log(props)
    return(
        <>
            <div className='optionsName'>
                {props.optionsName}
            </div>      
            {/* <div className="productsSection"> 
                 <ProductsSection products={props.products}/>
            </div>  */}
        </>
    )
}

export default Option