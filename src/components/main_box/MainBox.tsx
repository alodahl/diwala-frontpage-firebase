import * as React from 'react';
import '../../compiled_css/components/main_box/MainBox.css';
import '../../compiled_css/components/core/Core.css';
import Hero from '../hero/Hero';
import SlackButton from '../buttons/slack/SlackButton';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import Benefits from '../benefits/Benefits';
import Mission from '../mission/Mission';
import NewsletterButton from '../buttons/newsletter/NewsletterButton';

class MainBox extends React.Component {
  public props: { texts: TextData[] };

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
  }

  render() {
    const benefits = this.props.texts.find(text => text.id === 'benefits');
    return (
      <div className="MainBox">
        <section className="MainBox__section">
          <Hero />
          <SlackButton />
        </section>
        <section className="MainBox__section">
          {benefits ? <Benefits text={benefits} /> : ''}
        </section>
        <section className="MainBox__section">
          <Mission />
          <NewsletterButton />
        </section>
      </div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getTexts: (action: any) => getTexts(dispatch, action)
  };
};

const ConnectedMainBox = connect(
  state => state,
  mapApiToState
)(MainBox);

export default ConnectedMainBox;
