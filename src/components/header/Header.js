import React, { useState } from 'react'
import './header.css'
import logo from './DGMT_logo-removebg-preview.png'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);
    const [isMenuVisibles, setMenuVisibilitys] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const handleMouseEnter = () => {
        setMenuVisibility(true);
        setMenuVisibilitys(false)

    };

    const handleMouseEnters = () => {
        setMenuVisibility(false);
        setMenuVisibilitys(true)
    };

    const handleMouseLeave = () => {
        setMenuVisibility(false);
    };
    const handleMouseLeaves = () => {
        setMenuVisibility(false);
        setMenuVisibilitys(false);
    };
    const handleMenuItemClick = () => {
        setMenuVisibility(false);
        setMenuVisibilitys(false);
      };
    return (
        <>
            <header>
                <div className='dgmt-container'>
                    <div className='dgmt-logo'>
                        <Link to="/"><img loading="lazy" src={logo} alt='Logo' /></Link>
                    </div>
                    <div className='dgmt-right'>
                        <nav className={`dgmt-navigation ${menuOpen ? 'show' : 'hiden'}`}>
                            <ul>
                                <li><Link className='hover' to='/' >Home</Link></li>
                                <li><Link className='hover' to='/about-us' >About Us</Link></li>
                                <li className='dgmt-inventure-drop-down'  onMouseLeave={handleMouseLeaves}>
                                    <Link className='hover dropdown-hover'  to='' onMouseEnter={handleMouseEnter} >
                                        Our Inventures
                                    </Link>
                                    <ul className={`dgmt-drop-down firstdrop ${isMenuVisible ? 'visible' : 'hidden'}`} >
                                        <li><Link target='blank' to='https://confirmbuyers.com/'>Confirm Buyers</Link></li>
                                        <li><Link target='blank' to='https://quicksolutionindia.com/'>Quick Solutions</Link></li>
                                        {/* <li><Link to='/B2B'>B2B</Link></li> */}
                                     

                                    </ul>

                                </li>
                                <li className='dgmt-services-drop-down'   onMouseLeave={handleMouseLeaves} >
                                    <Link className='hover dropdown-hover' to='' onMouseEnter={handleMouseEnters} >Our Services</Link>
                                    <ul className={`dgmt-drop-down  ${isMenuVisibles ? 'visible' : 'hidden'}`}  >
                                        {/* <li><Link onClick={handleMenuItemClick} to='/Graphics-Designing '>Graphics Designing</Link></li> */}
                                        <li><Link onClick={handleMenuItemClick} to='/B2B'>B2B</Link></li>
                                        <li><Link onClick={handleMenuItemClick} to='/export'>Export & Import</Link></li>
                                        <li><Link onClick={handleMenuItemClick} to='/Web-Development'>Website Development</Link></li>
                                        <li><Link onClick={handleMenuItemClick} to='/Social-Media-Marketing'>Social Media Marketing</Link></li>
                                        <li><Link onClick={handleMenuItemClick} to='/Digital-Marketing'>Digital Marketing</Link></li>
                                        <li><Link onClick={handleMenuItemClick} to='/Search-Engine-Optimization'>Search Engine Optimization</Link></li>
                                       
                                    </ul>
                                </li>
                                <li><Link onClick={handleMenuItemClick} to='/Certificates' className='hover' >Certificates</Link></li>
                                <li><Link onClick={handleMenuItemClick} to='/contact' className='hover' >Contact Us</Link></li>
                            </ul>
                        </nav>
                       
                        <div className='dgmt-btns'>
                            <button className='dgmt-call-btn' ><a href='tel:+91-9717505051'><i class="ri-phone-fill"></i></a></button>
                           <Link to="/contact"> <button className='dgmt-quote-btn'>Request A Quote</button></Link>
                            <div className="container">
                                <label className="toggle" for="switch">
                                    <input id="switch" className="input" type="checkbox" />
                                    <div className="icon icon--moon">
                                        <svg height="32" width="32" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>

                                    <div className="icon icon--sun">
                                        <svg height="23" width="23" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='nav-mobile' onClick={handleToggleMenu}>
        <i className="ri-menu-line"></i>
      </div>
      
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
