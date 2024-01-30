import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';


//imports for font awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//specific icons
import { faBars, faTimes, faShieldHalved } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button , setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Joseph {' '}
                        <span style={{ marginLeft: '5px'}}>
                            <strong>Uchida</strong>
                        </span>
                        <span style={{ marginLeft: '5px'}}>
                            <FontAwesomeIcon icon={faShieldHalved}/>
                        </span>                        
                    </Link>
                    <div className='menu-icon'onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes: faBars} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/getting-started' className='nav-links' onClick={closeMobileMenu}>
                                Get-Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}


export default Navbar;