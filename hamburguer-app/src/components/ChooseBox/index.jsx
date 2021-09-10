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
                {/* {optionsList.map((options) => {
                    return <ChooseSection options={options} key={options.id} />
                })}  */}
                {productsList.map((meatList) => {
                    return <ProductsSection meatList={meatList} key={meatList.id} />
                })} 
            </div>
            <button className='sendButton'>Finalizado</button>
        </div>
    )
}
export default ChooseBox
