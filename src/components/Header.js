import { React } from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";
import { HiShoppingCart } from 'react-icons/hi';

const Header = ({   title, 
                    subtitle, 
                    cartCounter,
                    onToggleCart
                }) => {
  return (
      <header>
            <div className="container">
                <div className="upHeader">
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
                                <li className='headerCart' onClick={onToggleCart}><Link to="/" ><HiShoppingCart /><span className='headerCartCounter'>{cartCounter}</span></Link></li>
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