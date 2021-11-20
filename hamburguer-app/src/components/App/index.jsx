import React, { useState, useEffect, useContext } from 'react'
import OptionsList from '../OptionsList'
import Header from '../Header'
import HamburguerImg from '../HamburguerImg'
import OptionsService from '../../services/OptionsService'
import { OptionsData } from '../../OptionsData'
import './index.css'

// npx json-server --watch db.json
const App = (props) => {
    const optionsService = new OptionsService()

    const [options, setOptions] = useState([])
    useEffect(() => {
        optionsService.listAll().then(optionsObject => {
            setOptions(optionsObject)
        })
    }, [])
    const [count, setCount] = useState(0);

    return (
        <OptionsData.Provider value={{ options, count, setCount }}>
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
        </OptionsData.Provider>
    )
}
export default App