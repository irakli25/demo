import React from 'react'
import CartItem from './CartItem'
import { HiOutlineX } from 'react-icons/hi';

const Cart = ({cartItems, setCart, show, onToggleCart, settings, onDeleteProductCart}) => {

  const buy = () => {
      settings.purchase_units.basket = [];
      cartItems.map((item) => {
        const { quantity, unit_price, description, product_id } = item;
        settings.purchase_units.basket.push({ quantity, unit_price, description, product_id });
        return item;
      })
      console.log( settings.purchase_units.basket);
    fetch('http://localhost:4000/geturl',{
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(settings)
  }).then(async (res)=>{
      res.json().then((json) => {
         const redirect = json._links.redirect.href;
          window.open(redirect, '_blank').focus();
      });
  })
  }

  return (
    <div className={`cart ${show ? '':'hide'}`}>
        <div className= 'cartContent'>
          <div className='cartHeader'>
          <HiOutlineX className='cartClose close' onClick={onToggleCart}/>
          </div>
          <div className='scrollY'>
            {
                cartItems.map((item) => (
                    <CartItem product ={item} key = {item.product_id} setCart={setCart} cartItems = {cartItems} onClose = {onToggleCart} onDeleteProductCart= {onDeleteProductCart}/>
                ))
            }
          </div>
          <button className="introButton buy" id="buy" onClick={buy}>ყიდვა</button>
        </div>
    </div>
  )
}

Cart.defaultProps = {
  show: false
}

export default Cart