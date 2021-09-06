import React from 'react'
import './index.css'
import ChooseSection from './ChooseSection'

// function ChooseBox(props) {
//     return ()
// }

const ChooseBox = (props) => {
    console.log(props)
    const list = props.productsList

    return (
        <div className='containerBox'>
            <div className="chooseContainer">
                {list.map((product) => {
                    return <ChooseSection product={product} key={product.id} />
                })}
            </div>
            <button className='sendButton'>Finalizado</button>
        </div>
    )
}
export default ChooseBox
