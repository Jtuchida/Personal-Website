// PopoutNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const PopoutNavbar = ({ click, closeMobileMenu, handleClick}) => {

    return (
        <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
            <ul className={click ? 'nav-menu-pop-out active' : 'nav-menu-pop-out'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/feedback' className='nav-links' onClick={closeMobileMenu}>
                        Feedback
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default PopoutNavbar;
