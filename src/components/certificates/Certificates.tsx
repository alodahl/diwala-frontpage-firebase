import * as React from 'react';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import getPartners, { PartnerData } from '../../api/partners';
import getTeam from '../../api/team';

import getPictures, { PictureData } from '../../api/pictures';
import { loadPictures } from '../../actions/pictures';
import Section from '../section/Section';
import ImpactPicture from '../impact_picture_section/ImpactPictureSection';
import Statement from '../statement/Statement';
import CertificateHome from './CertificateHome';
import TextFetcher from '../text_fetcher/TextFetcher';
import SubscriptionSignup from './subscription_signup/SubscriptionSignup';

import PictureFetcher from '../picture_fetcher/PictureFetcher';
import StaticPicture from '../static_picture/StaticPicture';

const emptyText: TextData = { id: 'empty', value: [] };

class MainBox extends React.Component {
  public props: {
    texts: TextData[],
    partners: PartnerData[],
    pictures: PictureData[];
    team: any
  };

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
    props.getPictures(loadPictures);
  }

  public render() {
    const SignupButton = (texts: TextData[]) => {
      return (
        <TextFetcher key="1" id="certificates-impact-picture" texts={texts}>
          <SubscriptionSignup text={emptyText} />
        </TextFetcher>
      );
    };

    const parentClass = 'Certificates';

    return (
      <div className={parentClass}>
        <div className="Certificates__container">
          <Section name="home" fullHeight={true} parentClass={parentClass}>
            <TextFetcher id="certificates-hero-text" texts={this.props.texts}>
              <CertificateHome text={emptyText}/>
            </TextFetcher>
          </Section>
        </div>
        <Section name="picture" fullWidth={true} parentClass={parentClass}>
          <PictureFetcher
            cropHeight={viewport => viewport.height}
            cropIf={viewport => viewport.width < 400}
            cropWidth={viewport => viewport.width}
            focalX={0.6}
            pictures={this.props.pictures}
            name="student-rectangular-pic">
            <StaticPicture
              height={0}
              src={'test'}
              width={0}/>
          </PictureFetcher>
        </Section>
        <Section name="ngo" fullHeight={true} parentClass={parentClass}>
          <div id="signup" />
          <TextFetcher id="certificates-impact-picture" texts={this.props.texts}>
            <ImpactPicture
              text={emptyText}
              pictures={this.props.pictures}
              picturePosition="right"
              pictureName="student-token-pic"
              pictureWidth={1150}
              pictureHeight={1050}
              scalePicture={true}
              textVerticalAlignement="top"
              extraModules={[SignupButton(this.props.texts)]}
            />
          </TextFetcher>
        </Section>
        <div className="Certificates__container">
          <Section name="statement" parentClass={parentClass}>
            <TextFetcher id="statement-opportunities" texts={this.props.texts}>
              <Statement
                pictures={this.props.pictures}
                text={emptyText}
                pictureNames={['statement-man', 'statement-woman']}
                textVerticalAlignement="top"
              />
            </TextFetcher>
          </Section>
        </div>
      </div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getPictures: (action: any) => getPictures(dispatch, action),
    getTexts: (action: any) => getTexts(dispatch, action),
    getPartners: (action: any) => getPartners(dispatch, action),
    getTeam: (action: any) => getTeam(dispatch, action),
  };
};

const ConnectedMainBox = connect(
  state => state,
  mapApiToState
)(MainBox);

export default ConnectedMainBox;
