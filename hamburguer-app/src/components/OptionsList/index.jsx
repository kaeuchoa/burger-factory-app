import React, { useContext } from 'react'
import './index.css'
import Option from './Option'
import { OptionsData } from '../../OptionsData'

const OptionsList = () => {
    const { options } = useContext(OptionsData)
    
    return (
        <div className="container">
            <div className='containerBox'>
                <div className="chooseContainer">
                    {options.map((option) => {
                        return <Option key={option.id} optionsName={option.name} products={option.products} />
                    })}
                </div>
                <button className='sendButton'>Finalizado</button>
            </div>
        </div>
    )
}

export default OptionsList