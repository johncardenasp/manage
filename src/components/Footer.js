import React from 'react';

import './styles/Footer.css';

import fblogo from '../images/icon-facebook.svg';
import ytlogo from '../images/icon-youtube.svg';
import twlogo from '../images/icon-twitter.svg';
import ptlogo from '../images/icon-pinterest.svg';
import iglogo from '../images/icon-instagram.svg';
import logoWhite from '../images/logo-white.svg';

class Footer extends React.Component {

  state = {
    email: "",
    emailError: ""
  }

  handleChange = e => {
    const isCheckbox = e.target.type === 'checkbox';

    this.setState({
      [e.target.name]: isCheckbox
      ? e.target.checked
      : e.target.value
    });
  };

  validate = () => {
    let emailError = '';
    
    if(!this.state.email.includes('@') || !this.state.email.includes('.')) {
      emailError = 'please insert a valid email';
    }

    if(emailError) {
      this.setState({emailError});
      return false;
    }

    return true;
  }

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid) {
      console.log(this.state)
    }
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">
              <input
                name="email"
                placeholder="Updates in your inbox..." 
                value={this.state.email}
                onChange={this.handleChange} 
              />
            </label>
            <button type="submit">GO</button>
            <p className="email__error">
              <i>
                {this.state.emailError}
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