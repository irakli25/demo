import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({title, subtitle}) => {

    const docs = () => {
        window.open('https://api.bog.ge/docs/').focus()
    }

    return (
        <div className="slider">
            <div className="tvWrapper">
                <div className="tv"></div>
                <div className="screen" ></div>
            </div>
            <div className="textWrapper">
                <h2 className="sliderTitle">{title}</h2>
                <p className="sliderText" >{subtitle}</p>
                <button className="sliderButton" onClick={docs} >დოკუმენტაცია</button>
            </div>
            <div className="sliderDots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
}

Slider.defaultProps = {
    title: 'API სერვისები თქვენი ბიზნესის განვითარებისთვის',
    subtitle: 'შემოუერთდით 1000+ კომპანიას, რომელსაც საკუთარ ციფრულ პროდუქტებში ინტეგრირებული აქვს საქართველოს ბანკის API სერვისები.'
}

Slider.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Slider