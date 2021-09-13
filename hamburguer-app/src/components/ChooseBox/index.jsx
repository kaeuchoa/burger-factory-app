import React from 'react'
import './index.css'
import ChooseSection from './ChooseSection'
import ProductsSection from './ProductsSection'

const ChooseBox = (props) => {
    const optionsList = props.optionsList
    const productsList = props.productsList
    
    return (
        <div className='containerBox'>
            <div className="chooseContainer">
                {optionsList.map((options) => {
                    return <ChooseSection options={options} key={options.id} />
                })} 
            </div>
            
            <div className="containerProducts">
                {productsList[1].map((products) => {
                    return  <ProductsSection products={products} key={products.id} />
                })}
            </div>
            <button className='sendButton'>Finalizado</button>
        </div>
    )
}
export default ChooseBox
