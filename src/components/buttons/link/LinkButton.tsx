import * as React from 'react';
import '../../../compiled_css/components/buttons/link/LinkButton.css';

export default function LinkButton(props: any) {
  return (
    <a className={props.classes} target="_blank" href={props.url}>{props.text}</a>
  );
}
