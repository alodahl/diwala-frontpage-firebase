import * as React from 'react';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import Benefits from '../benefits/Benefits';
import { loadPartners } from '../../actions/partners';
import getPartners, { PartnerData } from '../../api/partners';
import { loadTeam } from '../../actions/team';
import getTeam from '../../api/team';

import Partners from '../partners/Partners';
import Team from '../team/Team';

import getPictures, { PictureData } from '../../api/pictures';
import { loadPictures } from '../../actions/pictures';
import PictureFetcher from '../picture_fetcher/PictureFetcher';
import StaticPicture from '../static_picture/StaticPicture';
import Section from '../section/Section';
import Home from '../home/Home';
import TextFetcher from '../text_fetcher/TextFetcher';
import Mission from '../mission/Mission';
import DonationSection from '../donation_section/DonationSection';
import Filter from '../filter/Filter';

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
    props.getPartners(loadPartners);
    props.getPictures(loadPictures);
    props.getTeam(loadTeam);
  }

  public render() {

    return (
      <div className="MainBox">
        <Section name="home" fullHeight={true}>
          <TextFetcher id="hero-text" texts={this.props.texts}>
            <Home text={emptyText}/>
          </TextFetcher>
        </Section>
        <Section name="benefits">
          <TextFetcher id="benefits" texts={this.props.texts}>
            <Benefits text={emptyText} pictures={this.props.pictures}/>
          </TextFetcher>
        </Section>
        <Section name="picture" fullWidth={true}>
          <PictureFetcher
            cropHeight={viewport => viewport.height}
            cropIf={viewport => viewport.width < 400}
            cropWidth={viewport => viewport.width}
            focalX={0.6}
            pictures={this.props.pictures}
            name="Tanzania marked">
            <StaticPicture
              height={0}
              src={'test'}
              width={0}/>
          </PictureFetcher>
        </Section>
        <Section name="missionAndPartners">
          <div id="mission">
            <TextFetcher id="frontpage-missionstatement" texts={this.props.texts}>
              <Mission  pictures={this.props.pictures} text={emptyText}/>
            </TextFetcher>
          </div>
          <div id="partners">
            <Filter if={this.props.partners}>
              <Partners partners={this.props.partners}/>
            </Filter>
          </div>
        </Section>
        <Section name="support">
          <div id="support">
            <DonationSection />
          </div>
        </Section>
        <Section name="team">
          <Filter if={this.props.team}>
            <Team team={this.props.team}/>
          </Filter>
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
