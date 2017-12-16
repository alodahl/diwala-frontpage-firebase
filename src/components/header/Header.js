import React from 'react';
import '../../compiled_css/components/header/Header.css';
import logo from '../../graphics/logo.png'

export default function Header(props) {
  return (
        <header className="Header">
          <HeaderText/>
          <img className="Header-logo" src={logo} alt="Diwala" />
        </header>
        )
}

function HeaderText() {
  return (
    <div className="Header-text">
      <h1>Hi !</h1>
      <p>Thank you for stopping by our webpage</p>
      <p>Diwala is a digital economy platform, powered by blockchain,that enables refugees to build and verify their skills.</p>
      <p>By developing an identity for refugees, Diwala will improve the supply chain for impact organisations with data driven reporting.</p>
    </div>

  )
}
