import * as React from 'react';

export default function LinkButton(props: any) {
  return (
    <a className={props.classes} href={props.url}>{props.text}</a>
  );
}
