import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Header from './components/Header'
import ComponentsArea from './components/ComponentsArea'

ReactDOM.render(
    <> 
      <Header></Header>
      <ComponentsArea></ComponentsArea>
    </>
    ,
  document.getElementById('root')
);

