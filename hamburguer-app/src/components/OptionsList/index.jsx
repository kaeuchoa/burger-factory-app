import React from 'react'
import './index.css'
import Option from './Option'

const OptionsList = ({optionsList}) => {
    // desestruturação de arrays e objetos ([], {})
    //jsx -> html
    return (
        <div className='containerBox'>
            <div className="chooseContainer">
                {optionsList.map((option) => {
                    return <Option key={option.id} products={option.products} />
                })} 
            </div>
            <button className='sendButton'>Finalizado</button>
        </div>
    )
}
export default OptionsList
