import {React} from 'react'
import Product from './Product'

const Products = ({products, settings, setCart, cartItems, setProducts, onDeleteProductCart}) => {
  const onDeleteProductSettings = (id) => {
    setProducts(products.filter(product => product.product_id !== id));
    onDeleteProductCart(id);
  }
  try{
        return (
          <div className="introItems">
              {
              
                products.map((product)=> (
                      <Product product={product} cartItems={cartItems} key={product.product_id} settings={settings} setCart={setCart} onDeleteProductSettings = {onDeleteProductSettings}/>
                  ))
                }
          </div>
        )
      }
  catch(error){
        console.warn(error , 'localStorage.clear()');
        localStorage.clear();
      }
}

Products.defaultProps = {
    items: [],
    settings: false
}


export default Products