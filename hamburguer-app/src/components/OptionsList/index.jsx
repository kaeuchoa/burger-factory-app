import React from 'react'
import './index.css'
import Option from './Option'

const OptionsList = ({optionsList}) => {
    // console.log(optionsList)
    return (
        <div className='containerBox'>
            <div className="chooseContainer"> 
                {optionsList.map((option) => {  
                    return <Option key={option.id} optionsName={option.name} products={option.products}/>
                })}     
            </div>
            <button className='sendButton'>Finalizado</button>
        </div>
    )
}
export default OptionsList