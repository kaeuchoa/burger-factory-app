import React from 'react'
import OptionsList from '../OptionsList'
import Header from '../Header'
import HamburguerImg from '../HamburguerImg'
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
                    <OrderDetailsProvider>
                        
                    </OrderDetailsProvider>
                    <OptionsList />
                </div>
            </main>
        </div>
    )
}
export default App