import * as React from 'react';
import { SocialIcons } from 'react-social-icons';
const logo = require('../../graphics/Diwala_Logo_258x108px_1.png');
import CuriousToLearnMore from '../curious_to_learn_more/CuriousToLearnMore';
import BuyCertificates from '../certificates/BuyCertificates';
import { withRouter } from 'react-router';

const returnFooterComponent = (props: any) => {
  if (props.location.pathname === '/') {
    return <CuriousToLearnMore />;
  } else {
    return <BuyCertificates/>;
  }
};

const Footer = function(props: any) {
  const urls = [
    'http://twitter.com/diwala',
    'https://www.linkedin.com/company/18089037/',
    'https://www.instagram.com/diwala_/',
    'https://www.facebook.com/diwalaorg/',
  ];

  console.log(props);

  const color = '#5d05a7';
  const ExtraFooterComponent = returnFooterComponent(props);

  return (
      <footer className="Footer" id="footer">
        {ExtraFooterComponent}
        <div className="Footer__bottom">
          <div className="Footer__social-icons">
            <SocialIcons urls={urls} color={color}/>
          </div>
          <img className="Footer__logo" src={logo} alt="Diwala"/>
          <div className="Footer__copyright">
            Copyright © by Diwala. All rights reserved
          </div>
        </div>
      </footer>
  );
};

export default withRouter(Footer);
