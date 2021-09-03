import React from 'react'
import './index.css'
import HamburguerIcon from '../img/hamburguerIcon.svg'
export default ()=>
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