import React, {useState} from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'
import Products from 



const Option = (props)=>{
    // para abrir e fechar(mudar a classe css), usar o state
    const [show, setShow] = useState(false)
    
    function toggle() {
        setShow(show => !show);
    }
      console.log(show)
    return(
        <>
            <div >
                <button className='optionsName'onClick={toggle}>{props.optionsName}</button>
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