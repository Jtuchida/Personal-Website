import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import PopoutNavbar from './PopoutNavbar';
import { Button } from './Button';

//imports for font awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//specific icons
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ click, handleClick, closeMobileMenu, button }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-name'>
                        <span className='first-name' style={{ fontFamily: 'Roboto', fontWeight: 300 }} onClick={closeMobileMenu}>
                            Joseph</span> {' '}
                        <span style={{ marginLeft: '5px' }}>
                            Uchida
                        </span>
                        <Link to='/' className='navbar-logo'>
                            <span style={{ marginLeft: '10px' }}><FontAwesomeIcon icon={faShieldHalved} />
                            </span>
                        </Link>
                    </Link>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Feedback
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Feedback</Button>}
                <div>
                    <PopoutNavbar click={click} closeMobileMenu={closeMobileMenu} />
                </div>
            </nav >
        </>
    );
}


export default Navbar;