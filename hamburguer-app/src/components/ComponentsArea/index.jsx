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

  const options = fetchOptionsList()
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