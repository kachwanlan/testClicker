import React from 'react';
import './button.css';


const Button = (props) => {
  return (
    <div className='container'>
      <h3>{props.count}</h3>
      <button className='btnClicker' onClick={props.onClick}>click</button>
    </div>    
  )
}

export default Button