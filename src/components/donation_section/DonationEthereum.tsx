import * as React from 'react';
const ethqr = require('../../graphics/ethqr.png');

class DonationEther extends React.Component {

  public props: {
    handleCloseModal: () => void
  };

  constructor (props: any) {
    super(props);
  }

  render () {
    return (
      <div className="support-modal">
        <button onClick={this.props.handleCloseModal}>X</button>
        <h3>Support us with ether</h3>
        <span>0x3739330D8DC9654DaedE593C408bFB5d9a09ef20</span>
        <img className="donation-qr-image" src={ethqr} alt="Ethereum QR code"/>
      </div>
    );
  }
}

export default DonationEther;
