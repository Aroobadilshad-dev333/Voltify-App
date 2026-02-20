import { FaUserCircle } from 'react-icons/fa'
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

    const {cartItem} = useCart()
    const [openNav, setOpenNav] = useState(false)
    
    const toggleDropdown = ()=>{
        setOpenDropdown(!openDropdown)
    }
    return (
        <div className="navbar">
            <div className="navbar-inner">
                {/* logo section */}
                <div className="navbar-logo-wrap">
                    <Link to={'/'}><h1 className="navbar-logo"><span>V</span>oltify</h1></Link>
                    <div className="navbar-location">
                        <MapPin className='text-red-500' />
                        <span className="navbar-location-text">{location ? <div className="navbar-location-lines">
                            <p>{location.county}</p>
                            <p>{location.state}</p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown onClick={toggleDropdown}/>
                    </div>
                    {
                        openDropdown ? <div className="navbar-location-dropdown">
                         <h1 className="navbar-location-dropdown-title">Change Location <span onClick={toggleDropdown}><CgClose/></span></h1>
                         <button onClick={getLocation} className="navbar-location-btn">Detect my location</button>
                        </div> : null
                    }
                </div>
                {/* menu section */}
                <nav className="navbar-nav">
                    <ul className="navbar-links">
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "navbar-link navbar-link-active" : "navbar-link"}`}><li>Home</li></NavLink>
                        <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "navbar-link navbar-link-active" : "navbar-link"}`}><li>Products</li></NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "navbar-link navbar-link-active" : "navbar-link"}`}><li>About</li></NavLink>
                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "navbar-link navbar-link-active" : "navbar-link"}`}><li>Contact</li></NavLink>
                    </ul>
                    <Link to={'/cart'} className="navbar-cart">
                        <IoCartOutline className="navbar-cart-icon" />
                        <span className="navbar-cart-badge">{cartItem.length}</span>
                    </Link>
                    <div className="navbar-user">
                        <FaUserCircle className="navbar-user-icon" />
                        <span className="navbar-user-label">Guest</span>
                    </div>
                    {
                        openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className="navbar-menu-toggle"/>:<HiMenuAlt1 
                        onClick={()=>setOpenNav(true)}
                        className="navbar-menu-toggle"/>
                    }
                </nav>
            </div>
            <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
        </div>
    )
}

export default Navbar
