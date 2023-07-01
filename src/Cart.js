// import { render } from '@testing-library/react'
import React from 'react'
import CartItem from './CartItem'
// import Navber from './Navber';

const Cart = (props)=> {
   
      const {products} = props;
    return (
     <div id='Cart'>
        {products.map((product)=>{
         return(
         // <Navber/>,
         <CartItem 
         product={product} 
         key={product.id}
         IncreaseQuatity = {props.IncreaseQuatity}
         DecreaseQuatity = {props.DecreaseQuatity}
         delateprodect = {props.delateprodect}
         />
         )
        })}
     </div>
  )
}

export default Cart;