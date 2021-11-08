import React from 'react'
import { useState } from 'react'

const Products = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className='containerProducts'>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <input type="text" value={count} />
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>{props.name}</p>
        </div>
    )
}
export default Products