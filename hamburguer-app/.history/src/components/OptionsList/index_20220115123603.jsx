import React, {useState, useEffect, useContext} from 'react'
import './index.css'
import Option from './Option'
import OptionsService from '../../services/OptionsService'
import { OrderDetails } from '../../context/OrderDetails'

const OptionsList = () => {
    const optionsService = new OptionsService()
    const [options, setOptions] = useState([])
    const {get, setter, productsCount} = useContext(OrderDetails)
    useEffect(() => {
        optionsService.listAll().then(optionsObject => {
            setOptions(optionsObject)
        })
    }, [])

    const onClickHandler = (e) => {
        // pegar o resumo do pedido
        console.log(productsCount)
    }
    
    return (
        <div className="container">
            <div className='containerBox'>
                <div className="chooseContainer">
                    {options.map((option) => {
                        return <Option key={option.id} optionsName={option.name} products={option.products} />
                    })}
                </div>
                <button className='sendButton' onClick={onClickHandler}>Finalizado</button>
            </div>
        </div>
    )
}

export default OptionsList