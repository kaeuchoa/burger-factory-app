import React, { useState, useContext } from 'react'
import './index.css'
import Products from '../Products'
import { OptionsData } from '../../../OptionsData'

const Option = (props) => {
    // para abrir e fechar(mudar a classe css), usar o state

    const [show, setShow] = useState(false)
    function toggle() {
        setShow(show => !show);
    }
    function renderProducts() {
        return show ? props.products.map((product) => <Products count={props.count} setCount={props.setCount} name={product.name} />) : null
    }

    return (
        <>
            <div >
                <button className='optionsName' onClick={toggle}>{props.optionsName}</button>
            </div>

            <div className="productsSection">
                {renderProducts()}
            </div>
        </>
    )
}

export default Option