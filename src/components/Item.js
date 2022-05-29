import React from 'react'
import PropTypes from 'prop-types'
// import img from '../assets/'

const Item = ({item, buttonText, settings}) => {
  return (
    <div className="introItem" id={item.product_id}>
        <div 
            className="introPicture" 
            style={{backgroundImage: `url(${process.env.PUBLIC_URL}${item.src === '' ? 'img/intro.jpg' : item.src})`}}
        ></div>
        <h3 className="introTitle">{item.title === '' ? 'სათაური' : item.title }</h3>
        <p className="introText">ფასი : {item.amount}</p>
        <p className="introText">{item.description}</p>
        {
            settings ? <button className="introButton delete" productid={item.product_id}>წაშლა</button> :
            <button className="introButton" productid={item.product_id}>{buttonText}</button>
        }
        
    </div>
  )
}

Item.defaultProps = {
    buttonText: 'კალათაში დამატება',
    settings: false
}

Item.propTypes = {
    buttonText: PropTypes.string.isRequired,
    settings: PropTypes.bool.isRequired
}


export default Item