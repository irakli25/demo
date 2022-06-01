import React from 'react'
import PropTypes from 'prop-types'

const Product = ({product, buttonText, settings, setCart, cartItems, onDeleteProduct}) => {

    const addCart = () => {
        setCart([...cartItems, {
            src: product.src,
            title: product.title,
            unit_price: product.unit_price,
            description: product.description,
            quantity: product.quantity,
            product_id: product.product_id
          }])
    }

  return (
    <div className="introItem" id={product.product_id}>
        <div 
            className="introPicture" 
            style={{backgroundImage: `url(${process.env.PUBLIC_URL}${product.src === '' ? 'img/intro.jpg' : product.src})`}}
        ></div>
        <h3 className="introTitle">{product.title === '' ? 'სათაური' : product.title }</h3>
        <p className="introText">ID : {product.product_id}</p>
        <p className="introText">ფასი : {product.unit_price} ₾</p>
        <p className="introText">{product.description}</p>
        {
            settings ? <button className="introButton delete" onClick={() => onDeleteProduct(product.product_id)} >წაშლა</button> :
            <button className="introButton" onClick={addCart}>{buttonText}</button>
        }
        
    </div>
  )
}

Product.defaultProps = {
    buttonText: 'კალათაში დამატება',
    settings: false
}

Product.propTypes = {
    buttonText: PropTypes.string.isRequired,
    settings: PropTypes.bool.isRequired
}


export default Product