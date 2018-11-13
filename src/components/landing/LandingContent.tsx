import * as React from 'react';
import { TextData } from '../../api/texts';

const tokenImage = require('../../graphics/landing_token.svg');
const mobileImage = require('../../graphics/landing_phone.png');
const labelValues = [];

class LandingContent extends React.Component {
  public props: {
    text: TextData;
  };

  constructor(props: any) {
    super(props);
    let header1 = this.props.text.value.find((text: any) => {
      return text.label === 'header1';
    });
    let header2 = this.props.text.value.find((text: any) => {
      return text.label === 'header2';
    });
    let header3 = this.props.text.value.find((text: any) => {
      return text.label === 'header3';
    });
    let description = this.props.text.value.find((text: any) => {
      return text.label === 'description';
    });
    let joinBtnTxt = this.props.text.value.find((text: any) => {
      return text.label === 'joinBtnTxt';
    });
    labelValues.push(header1, header2, header3, description, joinBtnTxt);
  }

  public render() {
    return (
      <div className="landing">
        <img className="token-bg" src={tokenImage} />
        <div className="container landing-container">
          <div className="row landing-container-row">
            <div className="col-sm-6 col-md-6 landing-header-container">
              <div className="landing-header">
                <p>{labelValues[0] ? labelValues[0].value : ''}</p>
                <p>{labelValues[1] ? labelValues[1].value : ''}</p>
                <p>{labelValues[2] ? labelValues[2].value : ''}</p>
              </div>
              <div className="landing-description">
                <p>{labelValues[3] ? labelValues[3].value : ''}</p>
              </div>
              <div className="join-now-btn-container">
                <a className="join-now-btn" href="https://dev.cert.diwala.io/">
                  {labelValues[4] ? labelValues[4].value : ''}
                </a>
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

export default LandingContent;
