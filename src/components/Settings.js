

import { React, useState } from 'react'
import Products from './Products'
import { HiPlus } from 'react-icons/hi';

const Settings = ({products, setProducts, settings, setSettings, onDeleteProductCart}) => {

  // settings

  const [ttl, setTtl] = useState(settings.ttl);
  const [RedirectUrlsSuccess, setRedirectUrlsSuccess] = useState(settings.redirect_urls.success);
  const [redirectUrlsFail, setRedirectUrlsFail] = useState(settings.redirect_urls.fail);
  const [callbackUrl, setCallbackUrl] = useState(settings.callback_url);
  const [externalOrderId, setExternalOrderId] = useState(settings.external_order_id);
  const [purchaseUnitsTotalAmount, setPurchaseUnitsTotalAmount] = useState(settings.purchase_units.total_amount);
  const [purchaseUnitsTotalAmountDeliveryAmount, setPurchaseUnitsTotalAmountDeliveryAmount] = useState(settings.purchase_units.delivery.amount);
  const [purchaseUnitsTotalAmountDeliveryExclude, setPurchaseUnitsTotalAmountDeliveryExclude] = useState(settings.purchase_units.delivery.exclude);
  const [purchaseUnitsCurrency, setPurchaseUnitsCurrency] = useState(settings.purchase_units.currency);
  const [buyerFullName, setBuyerFullName] = useState(settings.buyer.full_name);
  const [buyerMaskedEmail, setBuyerMaskedEmail] = useState(settings.buyer.masked_email);
  const [buyerMaskedPhone, setBuyerMaskedPhone] = useState(settings.buyer.masked_phone);


  // products
  const [imgSrc, setImgSrc] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [product_id, setProductId] = useState('');
  const addProduct = () => {
    setProducts([...products.filter(product => product.product_id !== product_id), {
      src: imgSrc,
      title: title,
      unit_price: price,
      description: description,
      quantity: '1',
      product_id: product_id
    }])
  }

  const saveSettings = () => {
    setSettings({
                  ttl: ttl,
                  redirect_urls: {
                    success: RedirectUrlsSuccess,
                    fail: redirectUrlsFail
                  },
                  callback_url: callbackUrl,
                  external_order_id: externalOrderId,
                  purchase_units: {
                    total_amount: purchaseUnitsTotalAmount,
                    delivery: {
                      amount: purchaseUnitsTotalAmountDeliveryAmount,
                      exclude: purchaseUnitsTotalAmountDeliveryExclude
                    },
                    currency: purchaseUnitsCurrency,
                    basket: []
                  },
                  buyer: {
                    full_name: buyerFullName,
                    masked_email: buyerMaskedEmail,
                    masked_phone: buyerMaskedPhone
                  }
            })
  }



  return (
    <div className="container">
        <div className="services">
            <div className="shout">
                <p>“ Service settings „</p>
            </div>
            <div className="serviceItems">

                <div className="serviceItem form">
                    <label htmlFor="ttl">ttl</label>
                    <input type="text" onKeyUp={(e)=>setTtl(e.target.value)} id="ttl" name="ttl" placeholder="ttl" autoComplete="off" defaultValue="" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="redirect_urls_success">redirect_urls_success</label>
                    <input type="text" onKeyUp={(e)=>setRedirectUrlsSuccess(e.target.value)} id="redirect_urls_success" name="redirect_urls_success" placeholder="redirect_urls_success" autoComplete="off" defaultValue="" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="redirect_urls_fail">redirect_urls_fail</label>
                    <input type="text" onKeyUp={(e)=>setRedirectUrlsFail(e.target.value)} id="redirect_urls_fail" name="redirect_urls_fail" placeholder="redirect_urls_fail" autoComplete="off" defaultValue="" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="callback_url">callback_url</label>
                    <input type="text" onKeyUp={(e)=>setCallbackUrl(e.target.value)} id="callback_url" name="callback_url" placeholder="callback_url" autoComplete="off" defaultValue="" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="external_order_id">external_order_id</label>
                    <input type="text" onKeyUp={(e)=>setExternalOrderId(e.target.value)} id="external_order_id" name="external_order_id" placeholder="external_order_id" autoComplete="off" defaultValue="" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="purchase_units_total_amount">purchase_units_total_amount</label>
                    <input type="text" onKeyUp={(e)=>setPurchaseUnitsTotalAmount(e.target.value)} id="purchase_units_total_amount" name="purchase_units_total_amount" placeholder="purchase_units_total_amount" autoComplete="off" defaultValue={purchaseUnitsTotalAmount} required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="purchase_units_total_amount_delivery_amount">purchase_units_total_amount_delivery_amount</label>
                    <input type="text" onKeyUp={(e)=>setPurchaseUnitsTotalAmountDeliveryAmount(e.target.value)} id="purchase_units_total_amount_delivery_amount" name="purchase_units_total_amount_delivery_amount" placeholder="purchase_units_total_amount_delivery_amount" autoComplete="off" defaultValue="" required />
                </div>

                <div className="serviceItem form">
                    <input type="checkbox" onChange={(e)=>setPurchaseUnitsTotalAmountDeliveryExclude(e.target.checked)} id="purchase_units_total_amount_delivery_exclude" name="purchase_units_total_amount_delivery_exclude" defaultChecked />
                    <label htmlFor="purchase_units_total_amount_delivery_exclude">purchase_units_total_amount_delivery_exclude</label>
                </div>

                <div className="serviceItem form">
                  <label htmlFor="purchase_units_currency">purchase_units_currency</label>
                  <div className="select">
                    <select id="purchase_units_currency" onChange={(e)=>setPurchaseUnitsCurrency(e.target.value)}>
                      <option value="GEL">GEL</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                  </div>
                </div>

                <div className="serviceItem form">
                    <label htmlFor="buyer_full_name">buyer_full_name</label>
                    <input type="text" onKeyUp={(e)=>setBuyerFullName(e.target.value)} id="buyer_full_name" name="buyer_full_name" placeholder="buyer_full_name" autoComplete="off" defaultValue="" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="buyer_masked_email">buyer_masked_email</label>
                    <input type="text" onKeyUp={(e)=>setBuyerMaskedEmail(e.target.value)} id="buyer_masked_email" name="buyer_masked_email" placeholder="buyer_masked_email" autoComplete="off" defaultValue="" required />
                </div>

                <div className="serviceItem form">
                    <label htmlFor="buyer_masked_phone">buyer_masked_phone</label>
                    <input type="text" onKeyUp={(e)=>setBuyerMaskedPhone(e.target.value)} id="buyer_masked_phone" name="buyer_masked_phone" placeholder="buyer_masked_phone" autoComplete="off" defaultValue="" required />
                </div>

            </div>
            <button className="introButton buy" id="saveettings" onClick={saveSettings}>დამახსოვრება</button>
        </div>
        <div className="services">
            <div className="shout">
                <p>“ Products settings „</p>
            </div>
            <Products products={products} setProducts = {setProducts} settings = {true} onDeleteProductCart = {onDeleteProductCart}/>
            <div className='addProduct'>
                <div className="serviceItem form">
                    <label htmlFor="addImg">სურათის ლინკი</label>
                    <input type="text" onKeyUp={(e)=>setImgSrc(e.target.value)} id="addImg" name="addTitle" placeholder="სურათის ლინკი" autoComplete="off" defaultValue="" required />
                </div>
                <div className="serviceItem form">
                    <label htmlFor="addTitle">სათაური</label>
                    <input type="text" onKeyUp={(e)=>setTitle(e.target.value)} id="addTitle" name="addTitle" placeholder="სათაური" autoComplete="off" defaultValue="" required />
                </div>
                <div className="serviceItem form">
                    <label htmlFor="addId">ID</label>
                    <input type="text" onKeyUp={(e)=>setProductId(e.target.value)} id="addId" name="addId" placeholder="ID" autoComplete="off" defaultValue="" required />
                </div>
                <div className="serviceItem form">
                    <label htmlFor="addPrice">ფასი</label>
                    <input type="number" onKeyUp={(e)=>setPrice(e.target.value)} id="addPrice" name="addPrice" placeholder="ფასი" autoComplete="off" defaultValue="" required />
                </div>
                <div className="serviceItem form">
                    <label htmlFor="addDescription">აღწერა</label>
                    <input type="text" onKeyUp={(e)=>setDescription(e.target.value)} id="addDescription" name="addDescription" placeholder="აღწერა" autoComplete="off" defaultValue="" required />
                </div>
                <button className="introButton addButton" onClick={addProduct}><HiPlus /></button>
            </div>
            
            
        </div>
    </div>
  )
  
}

Settings.defaultProps = {}

export default Settings