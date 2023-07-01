import { render } from '@testing-library/react'
import React from 'react'
import CartItem from './CartItem'
import Navber from './Navber';
// import Cart from './';

class Cart extends React.Component {
   constructor () {
      super();
      this.state = {
         products: [
            {
               price: 999,
               title: 'Mobile Phone',
               qty: 1,
               img: '',
               id: 1
            },
            {
               price: 99,
               title: 'Watch',
               qty: 1,
               img: '',
               id: 2
            },
            {
               price: 9999,
               title: 'Laptop',
               qty: 1,
               img: '',
               id: 3
            }
         ]
      }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    inCreaseQuatity = (product)=>{
      console.log("increase", product);
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;
      this.setState({
         products
      })

    }
    deCreaseQuatity = (product)=>{
      console.log("increase", product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0){
         return;
      }
      products[index].qty -= 1;
      this.setState({
         products
      })

    }
    delateprodect = (id)=>{
      const {products} = this.state;
      const items = products.filter((item)=> item.id !== id);

      this.setState({
         products: items
      })

    }
    render () {
      const {products} = this.state;
    return (
     <div id='Cart'>
        {products.map((product)=>{
         return(
         <Navber/>,
         <CartItem product={product} 
         key={product.id}
         func={()=>{console.log('test')}}
         jsx = {<h1>test</h1>}
         IncreaseQuatity = {this.inCreaseQuatity}
         DecreaseQuatity = {this.deCreaseQuatity}
         delateprodect = {this.delateprodect}
         />
         )
        })}
     </div>
  )
}
}
export default Cart;