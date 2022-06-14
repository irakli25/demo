import { React } from 'react'
import PropTypes from 'prop-types'
import { Outlet, NavLink, activeClassName } from "react-router-dom";
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
                    <NavLink to="/">
                        <div className="logo">
                            <div className="logoItemUP">
                                <h1>{title}</h1>
                            </div>
                            <div className="logoItemDown">
                                <h6>{subtitle}</h6>
                            </div>
                        </div>
                    </NavLink>
                    <div className="navbar">
                        <nav>
                            <NavLink to="/">HOME</NavLink>
                            <NavLink to="/settings">DEMO SETTINGS</NavLink>
                            <HiShoppingCart className="headerCart" onClick={onToggleCart} /><span className='headerCartCounter'>{cartCounter}</span>
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