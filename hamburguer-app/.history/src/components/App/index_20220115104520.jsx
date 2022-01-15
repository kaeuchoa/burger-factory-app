import React, { useState, useEffect, useContext } from 'react'
import OptionsList from '../OptionsList'
import Header from '../Header'
import HamburguerImg from '../HamburguerImg'
import OptionsService from '../../services/OptionsService'
import { OptionsData } from '../../OptionsData'
import { ProductsData } from '../../ProductsDataContext'
import './index.css'

// npx json-server --watch db.json
const App = (props) => {
    return (
        <div>
            <Header />
            <main className='container'>
                <div className="hamburguerArea">
                    <HamburguerImg />
                </div>
                {/* Todo: mudar className */}
                <div className="options">
                    <OptionsList />
                </div>
            </main>
        </div>
    )
}
export default App