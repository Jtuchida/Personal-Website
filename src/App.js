// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import PopoutNavbar from './components/PopoutNavbar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <Navbar
        handleClick={handleClick}
        closeMobileMenu={closeMobileMenu}
        button={button}
        click={click}
      />
      <div className="App">
        <Routes>
          {/* Update to the actual routes of your application */}
          <Route path="/" element={<PopoutNavbar click={click} closeMobileMenu={closeMobileMenu} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
