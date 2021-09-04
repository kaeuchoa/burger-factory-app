import React from 'react'
import './index.css'
import ChooseSection from './ChooseSection'

export default ()=>
    <div className='container'>
        <div className="boxContainer">
            <ChooseSection></ChooseSection>
        </div>
        <button className='sendButton'>Send</button>
    </div>
