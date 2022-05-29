import React from 'react'

import { HiMinus, HiPlus, HiOutlineX } from 'react-icons/hi';

const CartItem = () => {
  return (
    <div className='cartItem'>
      <div className='leftSide'>
        <div className='cartItemImg' style={{backgroundImage: 'url(img/intro.jpg)'}}></div>
        <div className='cartItemInfo'>
          <h3>Lorem Ipsum</h3>
          <span>#7848768</span>
        </div>
     </div>
      <div className='rightSide'>
          <div className='quantityController'>
            <button className='quantityButton'><HiMinus /></button>
            <span>1</span>
            <button className='quantityButton'><HiPlus /></button>
          </div>
          <div className='rightSideEnd'>
            <div className='priceWrapper'>
              <span className='currency'>$</span>
              <span className='price'>8.30</span>
            </div>
            <HiOutlineX className='close'/>
          </div>
      </div>
    </div>
  )
}

CartItem.defaultProps = {}

export default CartItem