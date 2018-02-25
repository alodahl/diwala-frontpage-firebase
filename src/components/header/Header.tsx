import * as React from 'react';
import '../../compiled_css/components/header/Header.css';

const logo = require('../../graphics/Diwala_Logo_258x108px_1.png');

export default function Header(props: any) {
  return (
    <header className="Header">
      <img className="Header-logo" src={logo} alt="Diwala"/>
    </header>
  );
}
