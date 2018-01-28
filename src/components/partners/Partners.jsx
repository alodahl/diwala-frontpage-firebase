import React from 'react';
import '../../compiled_css/components/partners/Partners.css';
import { connect } from 'react-redux';
import { loadPartners } from '../../actions/partners'
import getPartners from '../../api/partners'

class Partners extends React.Component {
  constructor(props) {
    super(props)
    props.getPartners(loadPartners)
  }

  render () {
    const firstPartners = this.props.partners[0]
    const partners = firstPartners ? firstPartners.name : ""
    return (
        <div className="partners">
          { partners }
        </div>
        )
      }
}

const mapApiToState = (dispatch) => {
  return {
    getPartners: (action) => getPartners(dispatch, action)
  }
}

const ConnectedPartners = connect(
  state => state,
  mapApiToState
)(Partners);

export default ConnectedPartners;
