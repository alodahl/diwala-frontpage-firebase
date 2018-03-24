import * as React from 'react';
import * as ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
import EthDonation from './DonationEthereum';
import BitcoinDonation from './DonationBitcoin';

const customModalStyles = {
  content: {
    top: '20%',
    bottom: '20%',
    maxWidth: '550px',
    margin: '0 auto'
  }
};

class DonationModal extends React.Component {

  public props: {
  };

  public state: {
    showBitcoinModal: boolean,
    showEtherModal: boolean,
  };

  constructor (props: any) {
    super(props);
    this.state = {
      showBitcoinModal: false,
      showEtherModal: false
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (paymentType: string) {
    if (paymentType === 'bitcoin') {
      this.setState({ showBitcoinModal: true });
    }
    if (paymentType === 'ether') {
      this.setState({ showEtherModal: true });
    }
  }

  handleCloseModal () {
    this.setState({ showEtherModal: false, showBitcoinModal: false });
  }

  render () {
    return (
      <div className="button-holder">
        <button className="button yellow-button" onClick={this.handleOpenModal.bind(this, 'bitcoin')}>Bitcoin</button>
        <ReactModal
          isOpen={this.state.showBitcoinModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          style={customModalStyles}
        >
          <BitcoinDonation handleCloseModal={this.handleCloseModal} />
        </ReactModal>
        <button className="button" onClick={this.handleOpenModal.bind(this, 'ether')}>Ethere</button>
        <ReactModal
          isOpen={this.state.showEtherModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          style={customModalStyles}
        >
          <EthDonation handleCloseModal={this.handleCloseModal} />
        </ReactModal>
      </div>
    );
  }
}

export default DonationModal;
