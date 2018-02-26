import * as React from 'react';
import '../../compiled_css/components/footer/Footer.css';
import { SocialIcons } from 'react-social-icons';
const logo = require('../../graphics/Diwala_Logo_258x108px_1.png');
import NewsletterSignup from '../newsletter_signup/NewsletterSignup';
import LinkButton from '../buttons/link/LinkButton';

export default function Header(props: any) {
  const urls = [
    'http://twitter.com/diwala',
    'https://www.linkedin.com/company/18089037/',
    'https://www.instagram.com/diwala_/',
    'https://www.facebook.com/diwalaorg/',
  ];

  const color = '#5d05a7';

  return (
      <footer className="Footer" id="footer">
        <div className="flex-btn-group">
          <LinkButton
            classes="invert-button"
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
        <div className="social-icons">
          <SocialIcons urls={urls} color={color}/>
        </div>
        <img className="Header-logo" src={logo} alt="Diwala"/>
        <div className="copyright">
          Confidential and propriatary. Copyright © by Diwala org. All rights reserved
        </div>
      </footer>

  );
}
