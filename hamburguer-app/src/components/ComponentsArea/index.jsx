import React from 'react'
import ChooseBox from '../ChooseBox'
import HamburguerImg from '../HamburguerImg'
import './index.css'
export default () =>
  <div className='container'>
    <div className="hamburguerArea"><HamburguerImg></HamburguerImg></div>
    <div className="ChooseBox"><ChooseBox></ChooseBox></div>
  </div>