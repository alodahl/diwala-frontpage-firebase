import React from 'react';
import '../../compiled_css/components/header/Header.css';
import '../../compiled_css/components/core/Core.css';
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
      <p className="no-default-p-space">Diwala is a <span className="Diwala-bold">digital economy platform</span>, powered by blockchain,</p>
      <p className="no-default-p-space">that enables refugees to build their <span className="Diwala-bold">identity</span>, <span className="Diwala-bold">skills</span> and <span className="Diwala-bold">resources</span>.</p>
      <p></p>
      <p className="no-default-p-space">By developing an <span className="Diwala-bold">identity for refugees</span>, Diwala will improve</p>
      <p className="no-default-p-space">the supply chain for <span className="Diwala-bold">impact</span> organisations with <span className="Diwala-bold">data driven reporting</span>.</p>
    </div>

  )
}
