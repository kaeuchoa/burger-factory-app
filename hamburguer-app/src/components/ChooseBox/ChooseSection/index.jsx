import React from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'

const ChooseSection = ({products, options})=>{
    // para abrir e fechar(mudar a classe css), usar o state
    return(
        <>
            <div className='optionsName'>
                {options.name}
            </div>      
            <div className="productsSection"> 
                {props.children}
                 <ProductsSection products={props.products}/>
            </div> 
        </>
    )
}

export default ChooseSection