import React, { useState, useContext } from 'react'
import { OrderDetails } from '../../../context/OrderDetails';

import './index.css'

const Products = (props) => {
    const {getById, setter} = useContext(OrderDetails)
    const product = getById(props.id)
    function decrementCount() {
        if (product.count > 0) {
            setter(props.id, product.count - 1)
        }
    }
    function incrementCount() {
        if (count < 2) {
            setCount(count + 1)
        }
    }
    return (
        <div className='containerProducts'>
            <button onClick={decrementCount}>-1</button>
            <input type="text" value={count} />
            <button onClick={incrementCount}>+1</button>
            <p>{props.name}</p>
        </div>
    )
}
export default Products