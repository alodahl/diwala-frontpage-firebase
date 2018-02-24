import * as React from 'react';
import '../../compiled_css/components/buttons/Button.css';

export default function Buttons(props: any) {
  const newTab = props.newTab;
  return (
    <a href={props.href} className={`Button-link ${props.color}`} target={newTab ? '_blank' : ''}>
      {props.text}
    </a>
  );
}
