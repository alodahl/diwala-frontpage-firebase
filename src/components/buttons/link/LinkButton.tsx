import * as React from 'react';

export default function LinkButton(props: any) {
  return (
    <a className={props.classes} target="_blank" href={props.url}>{props.text}</a>
  );
}
