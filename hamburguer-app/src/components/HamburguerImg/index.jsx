import React from 'react'
import HamburguerImg from '../img/hamburguerImg.svg'
import './index.css'

 const BurguerImg = (props) =>{
       return(
        <div className='container'>
                <h2>Big Burguer</h2>
                <img className='hamburguerImg' src={HamburguerImg} alt="imagem do Big Burguer" />  
        </div>   
       )  
 }
    
 
export default BurguerImg