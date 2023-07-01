// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cart
 from './Cart';
import Navber from './Navber';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
       products: [
          {
             price: 999,
             title: 'Mobile Phone',
             qty: 1,
             img: 'https://images.pexels.com/photos/2765873/pexels-photo-2765873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
             id: 1
          },
          {
             price: 99,
             title: 'Watch',
             qty: 1,
             img: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&w=1000&q=80',
             id: 2
          },
          {
             price: 9999,
             title: 'Laptop',
             qty: 1,
             img: 'https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&w=1000&q=80',
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
  getCount=()=>{
    const {products} = this.state;

    let count = 0;
    products.forEach((product)=>{
      count += product.qty
    })
    return count;
  }
  gettotalprice = ()=>{
    const {products} = this.state;
    let total = 0
    products.map((product)=>{
      total = total + product.qty * product.price;
    })
    return total;
  }
  render(){
    const {products} = this.state;
    return (
      <div>
        <Navber
        count = {this.getCount()}
        />
        <Cart
        products={products} 
        key={products.id}
        IncreaseQuatity = {this.inCreaseQuatity}
        DecreaseQuatity = {this.deCreaseQuatity}
        delateprodect = {this.delateprodect}
        />
        
      <div>Total : {this.gettotalprice()}</div>
      </div>
    );
  }
}

export default App;
