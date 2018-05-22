import * as React from 'react';
import { TextData } from '../../api/texts';
import Hero from '../hero/Hero';
import ScrollToButton from '../buttons/scrollToButton/ScrollToButton';
import { getViewportWidth } from '../../core/utilities/viewport.functions';

class Home extends React.Component {
  public props: {
    text: TextData;
  };

  public render() {
    const screenWidth = getViewportWidth();
    const offset = screenWidth < 1200 ? -100 : -500;
    console.log(offset);
    return (
      <>
        <Hero text={this.props.text} textId="hero" tokenVersion="purple"/>
        <div className="website-hero__buttons">
          <ScrollToButton id="#signup" text={this.props.text} offset={offset} textId="sign_up"/>
          <ScrollToButton id="#footer" text={this.props.text} textId="question" invert/>
        </div>
      </>
    );
  }
}

export default Home;
