import React from 'react';

import './styles/Header.css';

import logo from '../images/logo.svg';
import burgerMenu from '../images/icon-hamburger.svg';

function Header() {

  // function onClick() {} for menu;

  return (
    <header className="header">
      <div className="img__container">
        <img src={logo} className="header__logo" alt="Manage logo" />
      </div>
      <div className="menu__container">
        <img 
          src={burgerMenu} 
          // onClick
          className="menu" 
          alt="Menu" 
        />
      <div className="displayed__menu">
      </div>
      </div>
    </header>
  );
}

export default Header;