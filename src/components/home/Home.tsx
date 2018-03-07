import * as React from 'react';
import { TextData } from '../../api/texts';
import Hero from '../hero/Hero';
import CollaborationButton from '../buttons/collaboration/Collaboration';
import SlackButton from '../slack_button/SlackButton';

class Home extends React.Component {
  public props: {
    text: TextData;
  };

  public render() {
    return (
      <>
        <Hero text={this.props.text}/>
        <div className="flex-btn-group">
          <CollaborationButton/>
          <SlackButton/>
        </div>
      </>
    );
  }
}

export default Home;