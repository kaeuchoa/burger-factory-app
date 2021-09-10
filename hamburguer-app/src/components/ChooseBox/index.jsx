import React from 'react'
import './index.css'
import ChooseSection from './ChooseSection'
import Options from './ChooseSection/Options'

const ChooseBox = (props) => {
    const productsList = props.productsList
    const optionsList = props.optionsList

    return (
        <div className='containerBox'>
            <div className="chooseContainer">
                {/* {productsList.map((product) => {
                    return <ChooseSection key={product.id} />
                })}  */}
                {optionsList.map((options) => {
                    return <ChooseSection options={options} key={options.id} />
                })} 
            </div>
            <button className='sendButton'>Finalizado</button>
        </div>
    )
}
export default ChooseBox
