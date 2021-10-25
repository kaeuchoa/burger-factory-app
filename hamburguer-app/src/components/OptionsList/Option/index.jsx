import React from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'

const Option = (props)=>{
    // para abrir e fechar(mudar a classe css), usar o state
    return(
        <>
            <div className='optionsName'>
                {props.optionsName}
            </div>      
            <div className="productsSection"> 
                 <ProductsSection products={props.products}/>
                 {console.log('entrou')}
            </div> 
        </>
    )
}

export default Option