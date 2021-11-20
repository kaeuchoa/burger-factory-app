import React, { useContext } from 'react'
import './index.css'
import { OptionsData } from '../../../OptionsData'

const Products = (props) => {
    // const [count, setCount] = useState(0);
    const { count, setCount } = useContext(OptionsData)
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
        <div className='containerProducts'>
            <button onClick={decrementCount}>-1</button>
            <input type="text" value={count} />
            <button onClick={incrementCount}>+1</button>
            <p>{props.name}</p>
        </div>
    )
}
export default Products