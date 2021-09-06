import React from 'react'
import ChooseBox from '../ChooseBox'
import HamburguerImg from '../HamburguerImg'
import './index.css'

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

  const list = fetchProductsList()

  return (
    <div className='container'>
    <div className="hamburguerArea">
      <HamburguerImg></HamburguerImg>
    </div>
    <div className="ChooseBox">
      <ChooseBox productsList={list}></ChooseBox>
    </div>
    </div>
  )
}

export default ComponentsArea