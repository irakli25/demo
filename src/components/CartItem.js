import {React, useEffect, useState } from 'react'

import { HiMinus, HiPlus, HiOutlineX } from 'react-icons/hi';

  const CartItem = ({product,setCart, cartItems, onDeleteProductCart, totalPrice, setTotalPrice}) => {

    const [quantity, setQuantity] = useState(Number(product.quantity));
    const quantityIncrease = () => {
      cartItems.map((cartItem)=> cartItem.product_id === product.product_id ? cartItem.quantity = quantity + 1 : cartItem);
      setCart([...cartItems]);
    }
    const quantityDecrease = () => {
      if(quantity !== 1)
        cartItems.map((cartItem)=> cartItem.product_id === product.product_id ? cartItem.quantity = quantity - 1: cartItem);
        setCart([...cartItems]);
    }
    
    // onUpdateQuantity
    useEffect(()=> {
      setQuantity(product.quantity);
    }, [product, cartItems])

  return (
    <div className='cartItem'>
      <div className='leftSide'>
        <div className='cartItemImg' style={{backgroundImage: `url(${product.src === '' ? 'img/intro.jpg' : product.src})`}}></div>
        <div className='cartItemInfo'>
          <h3>{product.title === '' ? 'სათაური' : product.title }</h3>
          <span>#{product.product_id}</span>
        </div>
     </div>
      <div className='rightSide'>
          <div className='quantityController'>
            <button className='quantityButton'><HiMinus onClick={quantityDecrease}/></button>
            {/* <input type="number" value={quantity} onKeyUp={changeQuantity}/> */}
            <span>{quantity}</span>
            <button className='quantityButton'><HiPlus onClick={quantityIncrease}/></button>
          </div>
          <div className='rightSideEnd'>
            <div className='priceWrapper'>
              <span className='currency'>₾</span>
              <span className='price'>{product.unit_price}</span>
            </div>
            <HiOutlineX className='close' onClick={() => onDeleteProductCart(product.product_id)}/>
          </div>
      </div>
    </div>
  )
}

CartItem.defaultProps = {}

export default CartItem