import React from 'react';
import './App.css';


const Navber =(props)=> {
      
        return (
            <div id='Navber'>
                <img src='https://cdn1.iconfinder.com/data/icons/free-98-icons/32/cart-512.png' alt=''/>
                <div id='number'>{props.count}</div>
            </div>
        )
      }
    
    
export default Navber;
