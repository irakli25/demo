import React from 'react'
import CartItem from './CartItem'
import { HiOutlineX } from 'react-icons/hi';

const Cart = ({cartItems, show}) => {
  const close = () => {
    document.dispatchEvent(new CustomEvent('toggleCart', {bubbles: true}));
  }
  return (
    <div className={`cart ${show ? '':'hide'}`}>
        <div className= 'cartContent'>
          <div className='cartHeader'>
          <HiOutlineX className='cartClose close' onClick={close}/>
          </div>
          <div className='scrollY'>
            {
                cartItems.map((item) => (
                    <CartItem key = {item.product_id}/>
                ))
            }
          </div>
        </div>
    </div>
  )
}

Cart.defaultProps = {
  show: false
}

export default Cart