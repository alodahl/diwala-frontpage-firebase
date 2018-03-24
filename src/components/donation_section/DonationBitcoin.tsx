import * as React from 'react';
const bitcoinqr = require('../../graphics/bitcoinqr.png');
class DonationBitcoin extends React.Component {

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
        <h3>Support us with bitcoin</h3>
        <span>1XgTFVhmmjgPgScFGfqLwrsH9hWE6uABo</span>
        <img className="donation-qr-image" src={bitcoinqr} alt="Bitcoin QR code"/>
      </div>
    );
  }
}

export default DonationBitcoin;
