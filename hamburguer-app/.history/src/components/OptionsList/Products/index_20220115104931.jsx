import React, { useState, useContext } from 'react'

import './index.css'

const Products = (props) => {
    const { products, setProducts } = useContext(ProductsData)
    const [count, setCount] = useState(0);

    function decrementCount() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    function incrementCount() {
        if (count < 2) {
            setCount(count + 1)
            setProducts({
                name: props.name,
                amount: count
            })
        }
    }

    console.log(products)
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