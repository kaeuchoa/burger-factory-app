import React from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'
import {useState} from 'react'

const Option = (props)=>{
    // para abrir e fechar(mudar a classe css), usar o state
    const [show, setShow] = useState(true)
    
    function toggle() {
        setShow(show => !show);
    }
      console.log(show)
    return(
        <>
            <div className='optionsName'>
                <button onClick={toggle}>{props.optionsName}</button>
            </div>  
               
            <div className="productsSection">
                {
                    show?<ProductsSection products={props.products}/> :null
                } 
                 
            </div> 
        </>
    )
}

export default Option