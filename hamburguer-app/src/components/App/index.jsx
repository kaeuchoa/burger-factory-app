import React, {useState, useEffect} from 'react'
import Header from '../Header'
import HamburguerImg from '../HamburguerImg'
import OptionsService from '../../services/OptionsService'
import OptionsList from '../OptionsList'

// npx json-server --watch db.json
const App = (props) =>{
    const optionsService = new OptionsService()

    const [ options, setOptions ] = useState([])
    useEffect(() => {
        optionsService.listAll().then(optionsObject => {
            setOptions(optionsObject)
        })
    }, [])

    return (
        <>
        <Header></Header>
        <main className='container'>
            <div className="hamburguerArea">
                <HamburguerImg/>
            </div>
            {/* Todo: mudar className */}
            <div className="options">
                <OptionsList optionsList={options}/>
            </div>
        </main>
        </>
    )
}
export default App