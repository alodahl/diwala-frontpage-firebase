import * as React from 'react';

const logo = require('../../graphics/Diwala_Logo_258x108px_1.png');
const indexUrl = window.location.host;

export default function Header(props: any) {
  return (
    <header className="Header">
      <div className="container-fluid">
        <div className="row">
          <a href={indexUrl}>
            <img className="Header__logo" src={logo} alt="Diwala"/>
          </a>
        </div>
      </div>
    </header>
  );
}
