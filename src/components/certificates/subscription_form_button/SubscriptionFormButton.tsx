import * as React from 'react';

const newsLetterUrl = 'http://eepurl.com/dll_5H';

export default function NewsletterButton(props: any) {
  const { buttonText } = props;
  const classes = `button subscription-signup-button`;

  if (props.onClick) {
    return (
      <button className={`${classes}`} onClick={props.onClick}>{buttonText}</button>
    );
  } else {
    return (
      <a className="newsletter-button invert-button" target="_blank" href={newsLetterUrl}>{buttonText}</a>
    );
  }
}
