import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

//imports for font awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//specific icons
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-name'>
                        <span className='first-name' style={{ fontFamily: 'Roboto', fontWeight: 300 }} onClick={closeMobileMenu}>
                            Joseph
                        </span>
                        <span style={{ marginLeft: '2px' }}>
                            Uchida
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
                                References
                            </Link> 
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>FEEDBACK</Button>}
                </div>
            </nav>
        </>
    );
}


export default Navbar;