import React from 'react'
import './index.css'
import HamburguerIcon from '../img/hamburguerIcon.svg'


const Header = (props)=>{
    return(
        <header>
            <div className="HamburguerIcon">
                <img src={HamburguerIcon} alt="" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

    
export default Header