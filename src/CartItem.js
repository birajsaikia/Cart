import React from 'react';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CartItem extends React.Component {
    
      render () {
        const { price, title, qty, img} = this.props.product;
        const{product, IncreaseQuatity, DecreaseQuatity, delateprodect}= this.props;
        return (
          <div className="cart-item">
            {/* {this.props.jsx} */}
            <div className="left-block">
              
              <img style={styles.image} src={img} />
            </div>
            <div className="right-block">
              <div style={ { fontSize: 25 } }>{title}</div>
              <div style={ { color: '#777' } }>Rs {price} </div>
              <div style={ { color: '#777' } }>Qty: {qty} </div>
              <div className="cart-item-actions">
                {/* Buttons */}
                <img
                  alt="increase"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/58/58282.png?w=740&t=st=1687718352~exp=1687718952~hmac=f57182dcae3a97f6a8fc7e2eded2ed1646e34172da20044109985d00f3295e14"
                  onClick={()=>IncreaseQuatity(product)}
                />
                {/* <FontAwesomeIcon icon={['fab', 'microsoft']} /> */}

                <img
                  alt="decrease"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/58/58801.png?w=740&t=st=1687718627~exp=1687719227~hmac=a1fb0cb544c7418abb8fffac798fc090e27d5ab551c475db391b6fc5eec8dd4e"
                  onClick={()=>DecreaseQuatity(product)}
                />
                <img
                  alt="delete"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/98/98090.png?w=740&t=st=1687718737~exp=1687719337~hmac=2406f6a45e77b8561b849342798cab4c403155c2994b5d80b2de945ff364c9f2"
                  onClick={()=>delateprodect(product.id)}
                />
              </div>
            </div>
          </div>
        );
      }
    }
    
    const styles = {
      image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
      }
}

export default CartItem;
