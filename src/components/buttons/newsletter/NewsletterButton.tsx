import * as React from 'react';
import '../../../compiled_css/components/buttons/newsletter/NewsletterButton.css';

const newsLetterUrl = 'http://eepurl.com/dll_5H';

export default function NewsletterButton(props: any) {
  return (
    <a className="newsletter-button" href={newsLetterUrl}>Follow our journey!</a>
  );
}
