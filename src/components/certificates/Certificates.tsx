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
import CertificateHome from './CertificateHome';
import TextFetcher from '../text_fetcher/TextFetcher';
import LabeledScrollToButton from '../buttons/labeledScrollToButton/LabeledScrollToButton';

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
    const ChildButton = (texts: TextData[]) => {
      return (
        <TextFetcher key="1" id="certificates-impact-picture" texts={texts}>
          <LabeledScrollToButton
            text={emptyText}
            textId="button"
            labelId="button-label"
            id="#footer"
            verticalPosition="center"
          />
        </TextFetcher>
      );
    };

    return (
      <div className="Certificates">
        <Section name="home" fullHeight={true}>
          <TextFetcher id="certificates-hero-text" texts={this.props.texts}>
            <CertificateHome text={emptyText}/>
          </TextFetcher>
        </Section>
        <Section name="home" fullHeight={true}>
          <TextFetcher id="certificates-impact-picture" texts={this.props.texts}>
            <ImpactPicture
              text={emptyText}
              pictures={this.props.pictures}
              picturePosition="right"
              pictureName="Tanzania market in token"
              textVerticalAlignement="top"
              extraModules={[ChildButton(this.props.texts)]}
            />
          </TextFetcher>
        </Section>
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
