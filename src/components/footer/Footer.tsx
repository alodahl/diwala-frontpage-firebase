import * as React from 'react';
import '../../compiled_css/components/footer/Footer.css';
import '../../compiled_css/components/core/Core.css';

const logo = require('../../graphics/logo.png');

export default function Header(props: any) {
  return (
    <footer className="Footer">
      <img className="Header-logo" src={logo} alt="Diwala"/>
    </footer>
  );
}
