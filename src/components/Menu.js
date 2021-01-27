import React from 'react';

import Header from './Header';

function openMenu(props) {
  if (!props.isOpen) {
    return null;
  }
}

function Menu() {
  return (
    <ul className="hide">
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
  );
}

export default Menu;