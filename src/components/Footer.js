import React from 'react';

import './styles/Footer.css';

import fblogo from '../images/icon-facebook.svg';
import ytlogo from '../images/icon-youtube.svg';
import twlogo from '../images/icon-twitter.svg';
import ptlogo from '../images/icon-pinterest.svg';
import iglogo from '../images/icon-instagram.svg';
import logoWhite from '../images/logo-white.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">
              <input 
                type="email"
                name="email"
                placeholder="Updates in your inbox..."  
              />
            </label>
            <button type="submit">GO</button>
            <p className="email__error">
              <i>
                Hola
              </i>
            </p>
          </form>
        </div>
        <nav className="footer__nav">
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/">
              <li>Pricing</li>
            </a>
            <a href="/">
              <li>Products</li>
            </a>
            <a href="/">
              <li>Abouts Us</li>
            </a>
          </ul>
          <ul>
            <a href="/">
              <li>Careers</li>
            </a>
            <a href="/">
              <li>Community</li>
            </a>
            <a href="/">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </nav>
        <div className="footer__social-links">
          <figure>
            <img src={fblogo} className="footer__icon" alt="Visit us in Facebook"/>
          </figure>
          <figure>
            <img src={ytlogo} className="footer__icon" alt="Visit us in Youtube"/>
          </figure>
          <figure>
            <img src={twlogo} className="footer__icon" alt="Visit us in Twitter"/>
          </figure>
          <figure>
            <img src={ptlogo} className="footer__icon" alt="Visit us in Pinterest"/>
          </figure>
          <figure>
            <img src={iglogo} className="footer__icon" alt="Visit us in Instagram"/>
          </figure>
        </div>
        <div className="footer__logo">
          <figure>
            <img src={logoWhite} alt="Logo"/>
          </figure>
        </div>
        <div className="copyright">
          <p>Copyright 2020. All Rights Reserved </p>
        </div>
      </footer>
    );
  }
}

export default Footer;