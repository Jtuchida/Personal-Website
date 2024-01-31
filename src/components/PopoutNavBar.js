import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

//imports for font awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//specific icons
import { faBars, faTimes, faShieldHalved,faBug } from "@fortawesome/free-solid-svg-icons";

function PopoutMenu() {
    const [click, setClick] = useState(false);
    const [, setButton] = useState(true);

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
                            Joseph</span>
                        <span style={{ marginLeft: '2px' }}>
                            Uchida
                        </span>                     
                    </Link>
                    
                </div>
            </nav>
        </>
    );
}


export default PopoutMenu;