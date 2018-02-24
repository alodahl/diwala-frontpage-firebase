import * as React from 'react';
import '../../compiled_css/components/partners/Partners.css';
import { connect } from 'react-redux';
import { loadPartners } from '../../actions/partners';
import getPartners from '../../api/partners';

class Partners extends React.Component {
  public props: any;

  constructor(props: any) {
    super(props);
    props.getPartners(loadPartners);
  }

  render() {
    const firstPartners = this.props.partners[ 0 ];
    const partners = firstPartners ? firstPartners.name : '';
    return (
      <div className="partners">
        {partners}
      </div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getPartners: (action: any) => getPartners(dispatch, action)
  };
};

const ConnectedPartners = connect(
  state => state,
  mapApiToState
)(Partners);

export default ConnectedPartners;
