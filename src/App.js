import Header from './components/Header';
import DemoShop from './components/DemoShop';
import Settings from './components/Settings';
import useLocalStorage from './storage/uselocalstorage';
import {React, useState } from 'react';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  const [items, setTasks] = useLocalStorage('products',[
    {
      src: '',
      title: '',
      amount: "10.50",
      description: "test_product",
      quantity: "1",
      product_id: "123450"
    },
    {
      src: '',
      title: '',
      amount: "10.50",
      description: "test_product",
      quantity: "1",
      product_id: "123451"
    },
    {
      src: '',
      title: '',
      amount: "10.50",
      description: "test_product",
      quantity: "1",
      product_id: "123452"
    },
    {
      src: '',
      title: '',
      amount: "10.50",
      description: "test_product",
      quantity: "1",
      product_id: "123453"
    },
  ]);

  const headerUp = () => {
    console.log('up');
  }

  return (
    <div className="app">
      <Router>
        <Header title="Marketplace" subtitle="Neque porro quisquam est" headerUp={headerUp}/>
          <Routes>
            <Route index element={<DemoShop items={items} />} />
            <Route path='/settings' element={<Settings items={items} />} />
          </Routes>
      </Router>
    </div>
  );
}

App.defaultProps = {}

export default App;
