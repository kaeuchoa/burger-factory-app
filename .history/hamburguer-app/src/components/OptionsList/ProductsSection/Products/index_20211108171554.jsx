import React from 'react'

const Products = (props) => {
    const [count, setCount] = useState(0);
    
    return (
        <div className='containerProducts'>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <input type="text" value={count} />
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>{products.name}</p>
        </div>
    )
}