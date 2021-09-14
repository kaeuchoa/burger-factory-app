import React from 'react'
import './index.css'
import ChooseSection from './ChooseSection'

const ChooseBox = (props) => {
    const optionsList = props.optionsList
    const productsList = props.productsList
    // desestruturação de arrays e objetos ([], {})
    //jsx -> html
    return (
        <div className='containerBox'>
            <div className="chooseContainer">
                {optionsList.map((options) => {
                    return <ChooseSection options={options} key={options.id} products={productsList} />
                })} 
            </div>
            <button className='sendButton'>Finalizado</button>
        </div>
    )
}
export default ChooseBox
