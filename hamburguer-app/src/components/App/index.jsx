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

    // const [ productsMeatList, setMeatList ] = useState([])
    // useEffect(() => {
    //     optionsService.productsMeatList().then(productsObjects =>{
    //         console.log(productsMeatList)
    //         setMeatList(productsObjects)
    //     })
    // }, [])
    return (
        <>
        <Header></Header>
        <main className='container'>
            <div className="hamburguerArea">
                <HamburguerImg/>
            </div>
            {/* Todo: mudar className */}
            <div className="ChooseBox">
                <OptionsList optionsList={options}/>
            </div>
        </main>
        </>
    )
}
export default App