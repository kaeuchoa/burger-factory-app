import React, { useState } from 'react'
import { OptionsData } from '../../../OptionsData'
import './index.css'

const Products = (props) => {
    const [count, setCount] = useState(0);

    function decrementCount() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    function incrementCount() {
        if (count < 4) {
            setCount(count + 1)
        }
    }
    return (
        <OptionsData.Provider value={{ count, setCount }}>
            <div className='containerProducts'>
                <button onClick={decrementCount}>-1</button>
                <input type="text" value={count} />
                <button onClick={incrementCount}>+1</button>
                <p>{props.name}</p>
            </div>
        </OptionsData.Provider>
    )
}
export default Products