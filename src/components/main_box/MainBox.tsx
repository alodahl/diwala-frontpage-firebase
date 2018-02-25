import * as React from 'react';
import '../../compiled_css/components/main_box/MainBox.css';
import '../../compiled_css/components/core/Core.css';
import Hero from '../hero/Hero';
import SlackButton from '../slack_button/SlackButton';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import Benefits from '../benefits/Benefits';
import Picture from '../picture/Picture';
import Mission from '../mission/Mission';

class MainBox extends React.Component {
  public props: { texts: TextData[] };

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
  }

  render() {
    const benefits = this.props.texts.find(text => text.id === 'benefits');
    const mission = this.props.texts.find(text => text.id === 'frontpage-missionstatement');
    return (
      <div className="MainBox">
        <section className="MainBox__section">
          {mission ? <Hero text={mission}/> : ''}
          <SlackButton/>
        </section>
        <section className="MainBox__section">
          {benefits ? <Benefits text={benefits}/> : ''}
        </section>
        <section className="MainBox__section">
          {/* tslint:disable-next-line*/}
          <Picture
            src="https://firebasestorage.googleapis.com.rsz.io/v0/b/diwala-frontpage-dev.appspot.com/o/RF2134672_Nduta_3Nov17_0135.jpg?alt=media&token=7af3bc78-907e-4117-949f-de7c2191de76?width=200"/>
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
