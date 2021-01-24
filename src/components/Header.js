import React from 'react';

import './styles/Header.css';

import logo from '../images/logo.svg';
import burgerMenu from '../images/icon-hamburger.svg';

function Header() {

  // function onClick() {} for menu;

  return (
    <header className="header">
      <div className="logo__container">
        <img src={logo} className="header__logo" alt="Manage logo" />
      </div>
      <nav className="menu__container">
        <img 
          src={burgerMenu} 
          // onClick
          className="burguer-menu" 
          alt="Menu" 
        />
        <div className="displayed__menu" />
      </nav>
    </header>
  );
}

export default Header;