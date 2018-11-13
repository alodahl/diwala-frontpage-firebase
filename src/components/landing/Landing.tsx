import * as React from 'react';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import TextFetcher from '../text_fetcher/TextFetcher';

import LandingContent from '../landing/LandingContent';
const emptyText: TextData = { id: 'empty', value: [] };

class Landing extends React.Component {
  public props: {
    texts: TextData[]
  };

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
  }

  public render() {
    return (
      <TextFetcher id="landing-text" texts={this.props.texts}>
        <LandingContent text={emptyText} />
      </TextFetcher>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getTexts: (action: any) => getTexts(dispatch, action),
  };
};

const ConnectedLanding = connect(
  state => state,
  mapApiToState
)(Landing);

export default ConnectedLanding;