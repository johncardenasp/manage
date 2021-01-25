import React from 'react';

import Button from './Button'

import './styles/Header.css';

import logo from '../images/logo.svg';
import burgerMenu from '../images/icon-hamburger.svg';
import iconClose from "../images/icon-close.svg";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }
  
  handleClick = () => {
    this.setState({ 
      open: !this.state.open
    })
  }

  render() {
    return (
      <header className="header">
        <div className="logo__container">
          <img src={logo} className="header__logo" alt="Manage logo" />
        </div>
        <nav className="menu__container">
          {this.state.open && (
            <img 
              src={burgerMenu} 
              onClick={this.handleClick}
              className="menu__icon" 
              alt="Menu" 
            />
          )} 

          {!this.state.open && (
            <img 
              src={iconClose}
              onClick={this.handleClick}
              className="menu__icon close"  
              alt="Close menu"
            />
          )}

          <ul className={this.state.open ? 'no-open' : 'open'} >
            <a href="/">
              <li>Pricing</li>
            </a>
            <a href="/">
              <li>Product</li>
            </a>
            <a href="/">
              <li>About Us</li>
            </a>
            <a href="/">
              <li>Careers</li>
            </a>
            <a href="/">
              <li>Community</li>
            </a>
          </ul>
        </nav>
        <div className="button__container">
          <Button />
        </div>
      </header>
    );
  }
}

export default Header;