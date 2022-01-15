import React, { useState, useContext } from 'react'
import { OrderDetails } from '../../../context/OrderDetails';

import './index.css'

const Products = (props) => {
    const [count, setCount] = useState(0);
    const {productsCount, updateProductCount} = useContext(OrderDetails)
    update

    function decrementCount() {
        if (count > 0) {
            setCount(count - 1)
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