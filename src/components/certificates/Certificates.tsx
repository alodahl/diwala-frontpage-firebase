import * as React from 'react';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import getPartners, { PartnerData } from '../../api/partners';
import getTeam from '../../api/team';

import getPictures, { PictureData } from '../../api/pictures';
import { loadPictures } from '../../actions/pictures';
import Section from '../section/Section';
import CertificateHome from './CertificateHome';
import TextFetcher from '../text_fetcher/TextFetcher';

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
    return (
      <div className="MainBox">
        <Section name="home" fullHeight={true}>
          <TextFetcher id="certificates-hero-text" texts={this.props.texts}>
            <CertificateHome text={emptyText}/>
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
