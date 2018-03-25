import * as React from 'react';
const ethqr = require('../../graphics/ethqr.png');
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546');

interface DonationEther {
  address: string;
}

class DonationEther extends React.Component {
  public props: {
    handleCloseModal: () => void
  };
  public state: {
    metaMask: boolean,
    paid: boolean,
  };

  constructor (props: any) {
    super(props);
    this.state = {
      metaMask: true,
      paid: false
    };

    this.address = '0x3739330D8DC9654DaedE593C408bFB5d9a09ef20';
    this.tipWithWeb3 = this.tipWithWeb3.bind(this);
  }

  async tipWithWeb3 () {
    var MY_ADDRESS = this.address;
    if (typeof web3 === 'undefined') {
      this.setState({metaMask: false});
    }
    console.log(web3);
    var userAddress = web3.eth.accounts[0];
    console.log(userAddress);
    const transaction = await web3.eth.sendTransaction({
      to: MY_ADDRESS,
      from: userAddress,
      value: web3.utils.toWei('1', 'ether'),
    });
    console.log(transaction);
  }

  render () {
    if (!this.state.metaMask) {
      return (
        <div className="support-modal">
          You need to install <a href="https://metmask.io">MetaMask </a> to use this feature.  <a href="https://metmask.io">https://metamask.io</a>
        </div>
      );
    }
    return (
      <div className="support-modal">
        <button className="close" onClick={this.props.handleCloseModal}>X</button>
        <h3>Support us with ether and other ERC20 tokens</h3>
        <button onClick={this.tipWithWeb3}>X</button>
        <span>{this.address}</span>
        <img className="donation-qr-image" src={ethqr} alt="Ethereum QR code"/>
      </div>
    );
  }
}

export default DonationEther;
