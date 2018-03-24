import * as React from 'react';
import DonationModal from './DonationModal';

class DonationSection extends React.Component {

  constructor (props: any) {
    super(props);
  }

  render () {
    return (
      <div className="support">
        <h2>Want to support us?</h2>
        <DonationModal />
      </div>
    );
  }
}

export default DonationSection;
