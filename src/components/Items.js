import {React} from 'react'
import Item from './Item'

const Items = ({items, settings}) => {
  try{
        return (
          <div className="introItems">
              {
              
                  items.map((item)=> (
                      <Item item={item} key={item.product_id} settings= {settings}/>
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

Items.defaultProps = {
    items: [],
    settings: false
}


export default Items