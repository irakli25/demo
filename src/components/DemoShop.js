import Slider from './Slider';
import Products from './Products';
import Cart from './Cart';

import { React } from 'react'

const DemoShop = ({cartItems, products, setCart, showCart, onToggleCart, settings, onDeleteProductCart}) => {
    
  return (
    <div className="container">
        <Slider />
        <Products products = {products} setCart={setCart} cartItems={cartItems} onDeleteProductCart = {onDeleteProductCart}/>
        <Cart show={showCart} cartItems={cartItems} setCart={setCart} onToggleCart = {onToggleCart} settings={settings} onDeleteProductCart = {onDeleteProductCart}/>
    </div>
  )
}

DemoShop.defaultProps = {}

export default DemoShop