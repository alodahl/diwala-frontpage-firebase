import * as React from 'react';

const logo = require('../../graphics/Diwala_Logo_258x108px_1.png');

export default function Header(props: any) {
  return (
    <header className="Header">
      <img className="Header-logo" src={logo} alt="Diwala"/>
    </header>
  );
}
