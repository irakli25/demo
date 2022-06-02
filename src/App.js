import Header from './components/Header';
import DemoShop from './components/DemoShop';
import Settings from './components/Settings';
import useLocalStorage from './storage/uselocalstorage';
import {React, useState, useEffect } from 'react';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  
  const [products, setProducts] = useLocalStorage('products',[
    {
      src: '',
      title: '',
      unit_price: "10.50",
      description: "test_product",
      quantity: 1,
      product_id: "123450"
    },
    {
      src: '',
      title: '',
      unit_price: "10.50",
      description: "test_product",
      quantity: 1,
      product_id: "123451"
    }
  ]);
  const [cartItems, setCart] = useLocalStorage('cart',[]);
  const [settings, setSettings] = useLocalStorage('settings',{
    ttl: 0,
    redirect_urls: {
      success: '',
      fail: ''
    },
    callback_url: '',
    external_order_id: '123456',
    purchase_units: {
      total_amount: '0',
      delivery: {
        amount: '0',
        exclude: false
      },
      currency: '',
      basket: []
    },
    buyer: {
      full_name: '',
      masked_email: '',
      masked_phone: ''
    }
});
  const [cartCounter, setCartCounter] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const toggleCart = (e) => {
      if(cartCounter !== 0){
          setShowCart(!showCart);
      }
      else {
          setShowCart(false);
      }
  }
  const onDeleteProductCart = (productID) => {
    const newList = cartItems.filter(item => item.product_id !== productID)
    setCart(newList);
    if(newList.length === 0 && showCart) {
      toggleCart();
    }
  }

      useEffect(()=>{
        setCartCounter(cartItems.length);
    },[cartItems])

  return (
    <div className="app">
      <Router>
          <Header title="Marketplace" 
                  subtitle="Neque porro quisquam est" 
                  cartItems={cartItems} 
                  cartCounter = {cartCounter} 
                  setCartCounter = {setCartCounter}
                  onToggleCart = {toggleCart}
          />
          <Routes>
            <Route index element={<DemoShop cartItems={cartItems} products={products} setCart={setCart} showCart = {showCart} onToggleCart = {toggleCart} settings={settings} onDeleteProductCart = {onDeleteProductCart}/>} />
            <Route path='/settings' element={<Settings products={products} setProducts = {setProducts} settings={settings} setSettings={setSettings} onDeleteProductCart = {onDeleteProductCart}/>} />
          </Routes>
      </Router>
    </div>
  );
}

App.defaultProps = {}

export default App;
