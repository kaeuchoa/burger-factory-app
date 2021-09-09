import React from 'react'
import ChooseBox from '../ChooseBox'
import HamburguerImg from '../HamburguerImg'
import './index.css'

const fetchOptionsList = ()=>{
  const optionsList = [
    {
      name:'Carne',
      id:0
    },
    {
      name:'Adicionais',
      id:1
    },
    {
      name:'Molhos',
      id:2
    },
    {
      name:'Bebidas',
      id:3
    },
  ]
  return optionsList
}
const fetchProductsList = () => {
  // mock
  const productsList = [
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
    {
      price: 0.5,
      supply: 10,
      name: 'Molho',
      id: 3
    },
  ]
  
  return productsList
}

const ComponentsArea= (props) => {

  const options = fetchProductsList()
  const products = fetchOptionsList()

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