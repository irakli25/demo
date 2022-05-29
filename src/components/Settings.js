

import { React } from 'react'
import Items from './Items'

const Settings = ({items}) => {

  return (
    <div className="container">
        <div className="services">
            <div className="shout">
                <p>“ Service settings „</p>
            </div>
            <div className="serviceItems">
                <div className="serviceItem form">
                    <label htmlFor="intent">intent</label>
                    <div className="select">
                        <select id="intent">
                          <option value="CAPTURE">CAPTURE</option>
                          <option value="AUTHORIZE">AUTHORIZE</option>
                        </select>
                      </div>
                </div>

                <div className="serviceItem form">
                    <label htmlFor="redirect_url">redirect_url</label>
                    <input type="text" id="redirect_url" name="redirect_url" placeholder="მაღაზიის მისამართი" autoComplete="off" defaultValue="მაღაზიის მისამართი სადაც უნდა დაბრუნდეს გადახდის შემდეგ" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="shop_order_id">shop_order_id</label>
                    <input type="text" id="shop_order_id" name="shop_order_id" placeholder="მაღაზიის_შეკვეთის_იდენტიფიკატორი" defaultValue="მაღაზიის_შეკვეთის_იდენტიფიკატორი" autoComplete="off" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="card_transaction_id">card_transaction_id</label>
                    <input type="text" id="card_transaction_id" name="card_transaction_id" placeholder="ბარათის ტრანზაქციის აიდი" autoComplete="off" />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="capture_method">capture_method</label>
                    <div className="select">
                        <select id="capture_method">
                          <option value="AUTOMATIC">AUTOMATIC</option>
                          <option value="MANUAL">MANUAL</option>
                        </select>
                      </div>
                </div>

                <div className="serviceItem form">
                    <label htmlFor="locale">locale</label>
                    <div className="select">
                        <select id="locale">
                          <option value="ka">ka</option>
                          <option value="en">en</option>
                        </select>
                      </div>
                </div>

                <div className="serviceItem form">
                    <label htmlFor="amount">amount</label>
                    <input type="text" id="amount" name="amount" placeholder="გადასახდელი სრული თანხა" defaultValue="20.00" autoComplete="off" />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="currency_code">currency_code</label>
                    <div className="select" >
                        <select id="currency_code">
                          <option value="GEL">GEL</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                      </div>
                </div>

                <div className="serviceItem form">
                    <input type="checkbox" id="shop_order" name="shop_order" defaultChecked />
                    <label htmlFor="shop_order">show_shop_order_id_on_extract</label>
                </div>

            </div>
            <button className="introButton buy" id="buy">დამახსოვრება</button>
        </div>
        <div className="services">
            <div className="shout">
                <p>“ Products settings „</p>
            </div>
            <Items items={items} settings = {true}/>
        </div>
    </div>
  )
  
}

Settings.defaultProps = {}

export default Settings