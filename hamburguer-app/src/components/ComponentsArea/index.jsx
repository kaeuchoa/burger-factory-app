import React, {useState, useEffect} from 'react'
import ChooseBox from '../ChooseBox'
import HamburguerImg from '../HamburguerImg'
import OptionsService from '../../services/OptionsService'
import './index.css'

// MVC -> uma classe representar os dados (model)
//      -> a interface (view)
//      -> ponte ou controlador (controller)

// Services -> responsável por fazer requisição http

// const fetchOptionsList = ()=>{
  
const fetchProductsList = () => {
  // mock
  const extraList = [
    {
      price: 2.0,
      supply: 10,
      name: 'Ovo',
      id: 0
    },
    {
      price: 1.5,
      supply: 15,
      name: 'Queijo',
      id: 1
    },
    {
      price: 1.0,
      supply: 5,
      name: 'Salada',
      id: 2
    },
  ]
  const meatList = [
    {
      price: 5.0,
      supply: 10,
      name: 'Bolvino',
      id: 0
    },
    {
      price: 7.5,
      supply: 15,
      name: 'Vegetariano',
      id: 1
    },
  ]
  const drinkList = [
    {
      price: 6.0,
      supply: 10,
      name: 'Suco',
      id: 0
    },
    {
      price: 4.5,
      supply: 18,
      name: 'Refrigerante',
      id: 1
    },
  ]
  const molhoList = [
    {
      price: 1.0,
      supply: 15,
      name: 'Barbecue',
      id: 0
    },
    {
      price: 1.5,
      supply: 20,
      name: 'Cheedar',
      id: 1
    },
  ]
  const all = [molhoList,drinkList,meatList,extraList]
  return all
}

const ComponentsArea= (props) => {
  const optionsService = new OptionsService()
  
  const [ options, setOptions ] = useState([])
  useEffect(() => {
    optionsService.listAll().then(optionsObject => {
      setOptions(optionsObject)
    })
  }, [])

  const products = fetchProductsList()
  return (
    <div className='container'>
      <div className="hamburguerArea">
        <HamburguerImg/>
      </div>
      <div className="ChooseBox">
        <ChooseBox productsList={products} optionsList={options}/>
      </div>
    </div>
  )
}

export default ComponentsArea