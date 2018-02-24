import * as React from 'react';
import '../../compiled_css/components/main_box/MainBox.css';
import '../../compiled_css/components/core/Core.css';
import Hero from '../hero/Hero';
import SlackButton from '../slack_button/SlackButton';
import { loadTexts } from '../../actions/texts';
import getTexts from '../../api/texts';
import { connect } from 'react-redux';
import Benefits from '../benefits/Benefits';
import Mission from '../mission/Mission';

class MainBox extends React.Component {
  public props: any;

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
  }

  render() {
    return (
      <div className="MainBox">
        <section className="MainBox__section">
          <Hero />
          <SlackButton />
        </section>
        <section className="MainBox__section">
          <Benefits />
        </section>
        <section className="MainBox__section">
          <Mission />
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
