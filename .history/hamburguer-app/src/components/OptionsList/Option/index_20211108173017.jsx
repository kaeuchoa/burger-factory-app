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

       return show? props.products.map((product)=> <Products name={product.name}/>) :null
    }
        


      console.log(show)
    return(
        <>
            <div >
                <button className='optionsName'onClick={toggle}>{props.optionsName}</button>
            </div>  
               
            <div className="productsSection">
                {
                    renderProducts() :null
                } 
            </div> 
        </>
    )
}

export default Option