import React, {useState, useEffect} from 'react'
import ChooseBox from '../ChooseBox'
import HamburguerImg from '../HamburguerImg'
import OptionsService from '../../services/OptionsService'
import './index.css'

// MVC  -> uma classe representar os dados (model)
//      -> a interface (view)
//      -> ponte ou controlador (controller)

// Services -> responsável por fazer requisição http
  

const ComponentsArea= (props) => {
  const optionsService = new OptionsService()

  const [ options, setOptions ] = useState([])
  useEffect(() => {
    optionsService.listAll().then(optionsObject => {
      setOptions(optionsObject)
    })
  }, [])

  const [ productsMeatList, setProducts ] = useState([])
  useEffect(()=>{
    optionsService.productsMeatList().then(productsObjects =>{
      setProducts(productsObjects)
    })
  }, [])
  
  console.log(productsMeatList,"ComponentesArea")
  
  return (
    <div className='container'>
      <div className="hamburguerArea">
        <HamburguerImg/>
      </div>
      <div className="ChooseBox">
        <ChooseBox  optionsList={options} products={productsMeatList}/>
      </div>
    </div>
  )
}

export default ComponentsArea