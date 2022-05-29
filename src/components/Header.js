import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";
import { HiShoppingCart } from 'react-icons/hi';

const Header = ({title, subtitle}) => {

    const [scrollValue , setScrollValue] = useState(0);
    const [cartCounter, setCartCounter] = useState(5);
    const onScroll = (e) => {
        setScrollValue(e.target.documentElement.scrollTop);
      };

    useEffect(()=>{
        window.addEventListener('scroll', onScroll);
        return () => {
        window.removeEventListener('scroll', onScroll);
        }
    },[scrollValue])

    const _cartClick = () => {
        document.dispatchEvent(new CustomEvent('toggleCart', {"bubbles":true, detail: {counter: cartCounter}}));
    }

  return (
      <header style={scrollValue > 65 ? {position:'fixed', borderTop: 'none'} : {}}>
            <div className="container">
                <div className="upHeader" style={scrollValue > 65 ? {display:'none'} : {}}>
                    <div className="socialIcons">
                        <div className="socialIcon linkedin"></div>
                        <div className="socialIcon twitter"></div>
                        <div className="socialIcon pinterest"></div>
                        <div className="socialIcon google"></div>
                        <div className="socialIcon rss"></div>
                    </div>
                    <div className="searchBar">
                        <input className="searchInput" type="text" placeholder="Search Our Website..." />
                        <button className="searchButton" >SEARCH</button>
                    </div>
                </div>
                <div className="downHeader" >
                        <div className="logo">
                            <div className="logoItemUP">
                                <h1>{title}</h1>
                            </div>
                        <div className="logoItemDown">
                            <h6>{subtitle}</h6>
                        </div>
                    </div>
                    <div className="navbar">
                        <nav>
                            <ul className="nav">
                                <li className="active"><Link to="/">HOME</Link></li>
                                <li><Link to="/settings">DEMO SETTINGS</Link></li>
                                <li><Link to="/" >FULL WIDTH</Link></li>
                                <li><Link to="/" >DROPDOWN</Link></li>
                                <li><Link to="/" >PORTFOLIO</Link></li>
                                <li className='headerCart' onClick={_cartClick}><Link to="/" ><HiShoppingCart /><span className='headerCartCounter'>{cartCounter}</span></Link></li>
                            </ul>
                        </nav>
                        <Outlet />
                    </div>
                </div>
            </div>
        </header>

  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header