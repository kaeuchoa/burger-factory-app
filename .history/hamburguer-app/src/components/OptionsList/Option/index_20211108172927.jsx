import React, {useState} from 'react'
import './index.css'
import ProductsSection from '../ProductsSection'
import Products from './Products'


const Option = (props)=>{
    // para abrir e fechar(mudar a classe css), usar o state
    const [show, setShow] = useState(false)
    
    function toggle() {
        setShow(show => !show);
    }
    function renderProducts(){

        
       return props.products.map((product)=> <Products name={product.name}/>)
    }


      console.log(show)
    return(
        <>
            <div >
                <button className='optionsName'onClick={toggle}>{props.optionsName}</button>
            </div>  
               
            <div className="productsSection">
                {
                    show? renderProducts() :null
                } 
            </div> 
        </>
    )
}

export default Option