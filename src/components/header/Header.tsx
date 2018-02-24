import * as React from 'react';
import '../../compiled_css/components/header/Header.css';
import '../../compiled_css/components/core/Core.css';

const logo = require('../../graphics/logo.png');

export default function Header(props: any) {
  return (
    <header className="Header">
      <HeaderText/>
      <img className="Header-logo" src={logo} alt="Diwala"/>
    </header>
  );
}

function HeaderText() {
  // const text = "We are building a decentralized platform that verifies the skills of people in displacement"
  return (
    <div className="Header-text">
      <h1>Hi !</h1>
      <p>Thank you for stopping by our webpage</p>
      <p className="no-default-p-space">We are building a <span className="Diwala-bold">decentralized platform</span></p>
      <p className="no-default-p-space">that <span className="Diwala-bold">verifies</span>, the
        <span className="Diwala-bold">skills</span> of people in displacement</p>
    </div>

  );
}
