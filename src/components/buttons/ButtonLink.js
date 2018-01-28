import React from 'react';
import '../../compiled_css/components/buttons/Button.css';
import logo from '../../graphics/logo.png'

export default function Header(props) {
  const newTab = props.newTab;
  return (
        <a href={props.href} className={`Button-link ${props.color}`} target={newTab ? "_blank" : ""}>
          { props.text }
        </a>
        )
}
