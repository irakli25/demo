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
      quantity: "1",
      product_id: "123450"
    },
    {
      src: '',
      title: '',
      unit_price: "10.50",
      description: "test_product",
      quantity: "1",
      product_id: "123451"
    }
  ]);
  const [cartItems, setCart] = useLocalStorage('cart',[]);
  const [settings, setSettings] = useLocalStorage('settings',[]);
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
            <Route index element={<DemoShop cartItems={cartItems} products={products} setCart={setCart} showCart = {showCart} onToggleCart = {toggleCart} settings={settings}/>} />
            <Route path='/settings' element={<Settings products={products} setProducts = {setProducts} settings={settings} setSettings={setSettings}/>} />
          </Routes>
      </Router>
    </div>
  );
}

App.defaultProps = {}

export default App;
