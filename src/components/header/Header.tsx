import * as React from 'react';
import '../../compiled_css/components/header/Header.css';
import '../../compiled_css/components/core/Core.css';

const logo = require('../../graphics/logo.png');

export default function Header(props: any) {
  return (
    <header className="Header">
      <img className="Header-logo" src={logo} alt="Diwala"/>
    </header>
  );
}
