import Slider from './Slider';
import Items from './Items';
import Cart from './Cart';
import useLocalStorage from '../storage/uselocalstorage';

import { React, useEffect, useState } from 'react'

const DemoShop = ({items}) => {
    const [showCart, setShowCart] = useState(false);
    
    useEffect(()=>{
        const toggleCart = (e) => {
            if(e.detail && e.detail.counter !== 0){
                setShowCart(!showCart);
            }
            else {
                setShowCart(false);
            }
        }
        window.addEventListener('toggleCart', toggleCart);
        return () => {
            window.removeEventListener('toggleCart', toggleCart);
        }
    },[showCart])
  return (
    <div className="container">
        <Slider />
        <Items items = {items} />
        <Cart cartItems ={items} show={showCart}/>
    </div>
  )
}

DemoShop.defaultProps = {}

export default DemoShop