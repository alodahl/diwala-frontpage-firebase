import * as React from 'react';

const newsLetterUrl = 'http://eepurl.com/dll_5H';

export default function NewsletterButton(props: any) {
  const classes = 'newsletter-button ' + props.injectedClasses;

  if (props.onClick) {
    return (
      <button className={classes} onClick={props.onClick} >Sign up for our newsletter!</button>
    );
  } else {
    return (
      <a className="newsletter-button" target="_blank" href={newsLetterUrl}>Sign up for our newsletter!</a>
    );
  }
}
