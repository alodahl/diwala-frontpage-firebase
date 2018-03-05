import * as React from 'react';
import '../../compiled_css/components/main_box/MainBox.css';
import Hero from '../hero/Hero';
import LinkButton from '../buttons/link/LinkButton';
import CollaborationButton from '../buttons/collaboration/Collaboration';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import Benefits from '../benefits/Benefits';
import { loadPartners } from '../../actions/partners';
import getPartners from '../../api/partners';

import Partners from '../partners/Partners';

import StaticPicture from '../static_picture/StaticPicture';
import Team from '../team/Team';

class MainBox extends React.Component {
  public props: {
    texts: TextData[],
    partners: any
  };

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
    props.getPartners(loadPartners);
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
      <section id="benefits" className="MainBox__section MainBox__section--with-borders">
        <Benefits text={benefits}/>
      </section>
    ) : <span/>;
  }

  private MissionOrNothing() {
    const missionStatement = this.props.texts.find(text => text.id === 'frontpage-missionstatement');
    return missionStatement ? (
      <div>
        <div className="title">{missionStatement.value[ 0 ].label}</div>
        <div>{missionStatement.value[ 0 ].value}</div>
      </div>
    ) : <span/>;
  }

  private PartnersOrNothing() {
    return this.props.partners ? (
      <section id="partners" className="MainBox__section">
        <Partners partners={this.props.partners}/>
      </section>
    ) : <span/>;
  }

  private TeamOrNothing() {
    // adding conditional when necessary
    return (
      <section id="team" className="MainBox__section">
        <Team/>
      </section>
    );
  }

  render() {
    return (
      <div className="MainBox">
        {this.HeroOrNothing()}
        {this.BenefitsOrNothing()}
        <section id="mission" className="MainBox__section longer MainBox__section--full-width">
          {/* tslint:disable*/}
          <StaticPicture
            height={3840}
            maxHeight={800}
            src="https://firebasestorage.googleapis.com/v0/b/diwala-frontpage-dev.appspot.com/o/RF2134672_Nduta_3Nov17_0135.jpg?alt=media&token=7af3bc78-907e-4117-949f-de7c2191de76"
            width={5760}
            modifiedHeight={150}
          />
          {this.MissionOrNothing()}
          {/* tslint:enable*/}
        </section>
        {this.PartnersOrNothing()}
        {this.TeamOrNothing()}
      </div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getTexts: (action: any) => getTexts(dispatch, action),
    getPartners: (action: any) => getPartners(dispatch, action)
  };
};

const ConnectedMainBox = connect(
  state => state,
  mapApiToState
)(MainBox);

export default ConnectedMainBox;
