import * as React from 'react';
import '../../compiled_css/components/landing/Landing.css';
const tokenImage = require('../../graphics/landing_token.svg');
const mobileImage = require('../../graphics/landing_phone.png');

class Landing extends React.Component {
  public render() {
    return (
      <div className="landing">
        <img className="token-bg" src={tokenImage} />
        <div className="container landing-container">
          <div className="row landing-container-row">
            <div className="col-sm-6 col-md-6 landing-header-container">
              <div className="landing-header">
                <p>Build trust</p>
                <p>Enable opportunities</p>
                <p>Challenge Fraud!</p>
              </div>
              <div className="landing-description">
                <p>Join Diwala and issue global and secure certificates to your students today! A proof of skills that can be verified anywhere. </p>
              </div>
              <div className="join-now-btn-container">
                <a className="join-now-btn" href="#">JOIN NOW</a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 landing-secondary-container">
              <img className="mobile" src={mobileImage} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Landing;