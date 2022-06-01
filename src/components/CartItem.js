import {React, useState } from 'react'

import { HiMinus, HiPlus, HiOutlineX } from 'react-icons/hi';

  const CartItem = ({product,setCart, cartItems, onClose}) => {
    const [quantity, setQuantity] = useState(Number(product.quantity));
    const quantityIncrease = () => {
      setQuantity(quantity + 1);
    }
    const quantityDecrease = () => {
      if(quantity !== 1)
        setQuantity(quantity - 1);
    }
    const changeQuantity = (e) => {
      if(e.key >= 0 && e.key <= 9)
      setQuantity(Number(e.key));
    }
    const onDelete = () => {
      const newList = cartItems.filter(item => item.product_id !== product.product_id)
      setCart(newList);
      if(newList.length === 0) {
        onClose();
      }
    }
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
            <HiOutlineX className='close' onClick={onDelete}/>
          </div>
      </div>
    </div>
  )
}

CartItem.defaultProps = {}

export default CartItem