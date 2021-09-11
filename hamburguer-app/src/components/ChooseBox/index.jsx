import React from 'react'
import './index.css'
import ChooseSection from './ChooseSection'
import ProductsSection from './ProductsSection'

const ChooseBox = (props) => {
    const optionsList = props.optionsList
    const productsList = props.productsList
    // console.log(productsList[1])
    // console.log(optionsList)
    return (
        <div className='containerBox'>
            <div className="chooseContainer">
                {optionsList.map((options) => {
                    return <ChooseSection options={options} key={options.id} />
                })} 
                {productsList[1].map((products) => {
                    <ProductsSection products={products} key={products.id} />
                })} 
            </div>
            <button className='sendButton'>Finalizado</button>
        </div>
    )
}
export default ChooseBox
