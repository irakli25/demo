import Slider from './Slider';
import Products from './Products';
import Cart from './Cart';

import { React } from 'react'

const DemoShop = ({cartItems, products, setCart, showCart, onToggleCart, settings}) => {
    
  return (
    <div className="container">
        <Slider />
        <Products products = {products} setCart={setCart} cartItems={cartItems}/>
        <Cart show={showCart} cartItems={cartItems} setCart={setCart} onToggleCart = {onToggleCart} settings={settings} />
    </div>
  )
}

DemoShop.defaultProps = {}

export default DemoShop