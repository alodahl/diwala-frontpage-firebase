import * as React from 'react';
import '../../compiled_css/components/benefits/Benefits.css';
import getTexts from '../../api/text';
import { connect } from 'react-redux';
import { loadTexts } from '../../actions/texts';

class Benefits extends React.Component {
  public props: any;

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
  }

  render() {
    return (
      <div className="benefits">test</div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getTexts: (action: any) => getTexts(dispatch, action)
  };
};

const ConnectedBenefits = connect(
  state => state,
  mapApiToState
)(Benefits);

export default ConnectedBenefits;
