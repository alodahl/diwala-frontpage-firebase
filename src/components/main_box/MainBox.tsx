import * as React from 'react';
import Hero from '../hero/Hero';
import LinkButton from '../buttons/link/LinkButton';
import CollaborationButton from '../buttons/collaboration/Collaboration';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import Benefits from '../benefits/Benefits';
import { loadPartners } from '../../actions/partners';
import getPartners from '../../api/partners';
import { loadTeam } from '../../actions/team';
import getTeam from '../../api/team';

import Partners from '../partners/Partners';
import Team from '../team/Team';

// import StaticPicture from '../static_picture/StaticPicture';
import getPictures, { PictureData } from '../../api/pictures';
import { loadPictures } from '../../actions/pictures';
import PictureFetcher from '../picture_fetcher/PictureFetcher';
import StaticPicture from '../static_picture/StaticPicture';

class MainBox extends React.Component {
  public props: {
    texts: TextData[],
    partners: any,
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

  private HeroOrNothing() {
    const hero = this.props.texts.find(text => text.id === 'hero-text');
    const joinSlack = 'https://join.slack.com/t/';
    const slackUrl = joinSlack + 'diwala-org/shared_invite/enQtMjIyODA4OTQ0MjEzLTZkMmU5MmNkNDg1YWEzNmM5Y2Q3NGYwYmMxMzkzMDJlMzBmZDdhOWUxNzNkZWJjNGEyZDhhYWY4NjA1ZDY2MTk';
    return hero ? (
      <section className="MainBox__section" id="home">
        <Hero text={hero}/>
        <div className="flex-btn-group">
          <CollaborationButton/>
          <LinkButton
            classes="button"
            url={slackUrl}
            text="Join our community on slack!"
          />
        </div>

      </section>
    ) : <span/>;
  }

  private BenefitsOrNothing() {
    const benefits = this.props.texts.find(text => text.id === 'benefits');
    return benefits ? (
      <section id="benefits" className="MainBox__section">
        <Benefits text={benefits}/>
      </section>
    ) : <span/>;
  }

  private MissionOrNothing() {
    const missionStatement = this.props.texts.find(text => text.id === 'frontpage-missionstatement');
    return missionStatement ? (
      <section id="mission" className="MainBox__section MainBox__section--mission">
        <h2 className="title">{missionStatement.value[ 0 ].label}</h2>
        <div>{missionStatement.value[ 0 ].value}</div>
      </section>
    ) : <span/>;
  }

  private PartnersOrNothing() {
    return this.props.partners ? (
      <section id="partners" className="MainBox__section MainBox__section--partners">
        <Partners partners={this.props.partners}/>
      </section>
    ) : <span/>;
  }

  private TeamOrNothing() {
    return this.props.team ? (
      <section id="team" className="MainBox__section">
        <Team team={this.props.team}/>
      </section>
    ) : '';
  }

  render() {
    return (
      <div className="MainBox">
        {this.HeroOrNothing()}
        {this.BenefitsOrNothing()}
        <section id="mission" className="MainBox__section longer MainBox__section--full-width">
          {/* tslint:disable*/}
          <PictureFetcher
            cropHeight={viewport => viewport.height}
            cropIf={viewport => viewport.width < 400}
            cropWidth={viewport => viewport.width}
            pictures={this.props.pictures}
            name="Tanzania marked">
            <StaticPicture
              height={0}
              src={'test'}
              width={0}/>
          </PictureFetcher>
        </section>
        {this.MissionOrNothing()}
        {this.PartnersOrNothing()}
        {this.TeamOrNothing()}
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
