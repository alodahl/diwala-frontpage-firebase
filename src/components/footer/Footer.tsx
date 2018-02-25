import * as React from 'react';
import '../../compiled_css/components/footer/Footer.css';
import { SocialIcons } from 'react-social-icons';
const logo = require('../../graphics/logo.png');
import { domain } from '../../core/variables/diwala-variables.js';

export default function Header(props: any) {
  const urls = [
    'http://twitter.com/diwala',
    'https://www.linkedin.com/company/18089037/',
    'https://www.instagram.com/diwala_/',
    'https://www.facebook.com/diwalaorg/',
    'https://diwala.org/'
  ];

  return (
      <footer className="Footer" id="footer">
          <div className="email-holder">
            <a href={`mailto:hello@${domain.full}`}>{`hello@${domain.full}`}</a>
          </div>
        <div className="social-icons">
          <SocialIcons urls={urls} />
        </div>
        <img className="Header-logo" src={logo} alt="Diwala"/>
        <div className="copyright">
          Confidential and propriatary. Copyright @ by Diwala org. All rights reserved
        </div>
      </footer>

  );
}
