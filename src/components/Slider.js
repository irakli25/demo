import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({title}) => {
    return (
        <div className="slider">
            <div className="tvWrapper">
                <div className="tv"></div>
                <div className="screen" ></div>
            </div>
            <div className="textWrapper">
                <h2 className="sliderTitle">{title}</h2>
                <p className="sliderText" >Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Curabiturpisametur in ante.</p>
                <button className="sliderButton" >კალათაში დამატება</button>
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
    title: 'YOUR TITLE HERE'
}

Slider.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Slider