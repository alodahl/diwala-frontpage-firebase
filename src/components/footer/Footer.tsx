import * as React from 'react';
import { SocialIcons } from 'react-social-icons';
const logo = require('../../graphics/Diwala_Logo_258x108px_1.png');
const diwalaIcon = require('../../graphics/Diwala_Logo-08.png');
import NewsletterSignup from '../newsletter_signup/NewsletterSignup';
import LinkButton from '../buttons/link/LinkButton';

export default function Footer(props: any) {

  const urls = [
    'http://twitter.com/diwala',
    'https://www.linkedin.com/company/18089037/',
    'https://www.instagram.com/diwala_/',
    'https://www.facebook.com/diwalaorg/',
  ];

  const color = '#5d05a7';

  return (
      <footer className="Footer" id="footer">
        <img src={diwalaIcon} className="Footer__diwala-icon"/>
        <h2 className="Footer__title">Curious to learn more? </h2>
        <div className="Footer__buttons flex-btn-group">
          <LinkButton
            classes="button invert-button"
            url="mailto:hello@diwala.org"
            text="Send us an email"
          />
          <LinkButton
            classes="button"
            url="https://medium.com/diwala"
            text="Follow our journey!"
          />
          <NewsletterSignup />
        </div>
        <div className="Footer__bottom">
          <div className="Footer__social-icons">
            <SocialIcons urls={urls} color={color}/>
          </div>
          <img className="Footer__logo" src={logo} alt="Diwala"/>
          <div className="Footer__copyright">
            Proprietary. Copyright © by Diwala. All rights reserved
          </div>
        </div>
      </footer>
  );
}
