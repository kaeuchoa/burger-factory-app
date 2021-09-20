import React from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'

const ChooseSection = ({products, options})=>{
    // para abrir e fechar(mudar a classe css), usar o state
    console.log(products,"ChooseSection")
    return(
        <>
            <div className='optionsName'>
                {options.name}
            </div>      
            <div className="productsSection"> 
                 <ProductsSection products={products}/>
            </div> 
        </>
    )
}

export default ChooseSection